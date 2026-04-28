import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Modal } from "antd";
import employeePromotion from "../../../../assets/employee-promotion.png";
import employeeTransfer from "../../../../assets/employee-transfer.png";
import versionManagement from "../../../../assets/version-management.png";
import styles from "./index.module.less";
import {
  eraNarrative,
  portfolioOutcomesIntro,
  projectOutcomes,
  type ProjectOutcome,
} from "./outcomes.mock";
import { transitionSilky, viewportSection } from "../../../../motion/config";

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  detailParagraphs: string[];
  tags: string[];
  link: string;
};

type MergedProject = Project &
  Partial<Omit<ProjectOutcome, "projectId">> & {
    displayTags: string[];
  };

const projects: Project[] = [
  {
    id: "promotion",
    title: "晋升系统",
    category: "System Architecture",
    image: employeePromotion,
    desc: "无专职设计师场景下，以前端负责人兼 UI/产品补位推进 0→1；二期一次性全量上线，缺陷修复及时率 100%，稳定支撑公司晋升评审。",
    detailParagraphs: [
      "工程侧以评审主链路为中心拆分模块边界：围绕评分、候选人信息港、富文本等高风险交互做组件化抽象，统一状态管理与异常兜底策略，降低联调返工。",
      "建立可复用的页面级交互规范与组件契约（Props/事件/埋点字段），配合走查清单与灰度开关，保障高峰期评审体验与数据一致性。",
      "在 HR 工作台多人协作背景下，落地 Rspress 组件文档生成脚本，让公共组件在提交阶段持续可发现、可检索，减少重复封装与命名漂移。",
    ],
    tags: ["流程治理", "跨部门协作", "高质量交付"],
    link: "#",
  },
  {
    id: "transfer",
    title: "异动系统",
    category: "Mobile Development",
    image: employeeTransfer,
    desc: "团队与业务方双重变动下 1 个月救场：先对齐口径与上线标准，再落地移动端核心链路，保障业务连续并形成可复用推进模板。",
    detailParagraphs: [
      "交接期先完成“口径—范围—验收”三角对齐：把高频链路拆成最小上线包，明确接口契约与回归边界，避免范围膨胀拖垮窗口。",
      "移动端围绕申请、审批、通知做信息架构收敛：统一状态表达与异常兜底，让一线效率与合规要求同时可预期。",
      "上线后持续消化线上反馈，抽象富文本等通用能力沉淀到 HR/DSTE 场景，降低后续需求重复建设成本。",
    ],
    tags: ["快速接手", "移动端重构", "复杂协同"],
    link: "#",
  },
  {
    id: "version",
    title: "版本管理系统",
    category: "Product Management",
    image: versionManagement,
    desc: "作为前端技术负责人搭建多业务线版本/项目统一底座：双端协同、发布治理可审计，首年故障率 < 0.5%。",
    detailParagraphs: [
      "用统一版本模型承载规划、节奏、变更与回滚策略，并把“发布节点—责任人—验收口径”固化成可执行流程，减少跨团队口头对齐。",
      "双端采用“统一能力底座 + 差异化展示”，在权限同步与数据一致性上优先保障关键路径可观测、可回滚。",
      "以双周会/月刊机制推进协同，同时把组件库、脚手架与规范落到日常交付，让迭代节奏可预测、风险可前置。",
    ],
    tags: ["多端协同", "产品化建设", "稳定上线"],
    link: "#",
  },
  {
    id: "flyblock",
    title: "飞块低代码平台 3.0",
    category: "Low-Code Platform",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=1400",
    desc: "Owner 全闭环主导自研低代码平台：模块化 + 可视化配置落地，结合推广与模板化赋能，规模化支撑业务搭建并显著降本。",
    detailParagraphs: [
      "从竞品与外采约束反推 MVP：用“通用能力 + 扩展插槽”平衡定制与维护成本，并完成关键技术验证与前端架构落地。",
      "把搭建体验产品化：沉淀指引、案例模板与组件标准，让业务同学能自助搭建复杂页面，同时保持风格与交互一致。",
      "通过宣讲、答疑与持续迭代建立推广闭环，把平台能力从“能用”推进到“多团队日常深度使用”。",
    ],
    tags: ["低代码", "平台架构", "MVP 规划"],
    link: "#",
  },
  {
    id: "value-invest",
    title: "价值投资项目",
    category: "Multi-Agent Architecture",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1400",
    desc: "价值投资场景多智能体投研：借鉴 Claude / Claude Code 做意图识别与简单/复杂分流，ReAct 与 Plan-ReSolve 调研选型后落地多 Agent 编排（主 Agent 汇总、质疑校准）+ SSE 可观测；PC+iOS 覆盖分析—任务—复盘闭环。",
    detailParagraphs: [
      "产品与技术方案借鉴 Claude / Claude Code：意图识别区分简单与复杂任务；调研 ReAct 与 Plan-ReSolve 后选型，落地多 Agent 编排（主 Agent 汇总、质疑 Agent 校准）。后端以 FastAPI 承载：统一入口按意图分流到股票分析、Mission、模型工坊等，SSE 输出推理、工具与分段结果，降低黑盒感。",
      "长任务用 Plan-and-Execute + 状态机固化“规划确认 → 分步执行 → 落库沉淀”，并支持周期再跑，让过程可解释、可审计、可复盘。",
      "前端主导 PC/iOS：抽象任务状态与事件映射，统一信息架构与关键页面（列表/进度/结果/复盘），让移动场景也能跟进过程与结论。",
    ],
    tags: ["多Agent", "PC+iOS 双端", "SSE 流式", "任务编排"],
    link: "#",
  },
];

function mergeProjects(list: Project[]): MergedProject[] {
  const map = new Map(projectOutcomes.map((o) => [o.projectId, o] as const));
  return list.map((p) => {
    const o = map.get(p.id as ProjectOutcome["projectId"]);
    if (!o) {
      return { ...p, displayTags: [...p.tags] };
    }
    const { projectId: _omit, ...outcomeRest } = o;
    void _omit;
    const displayTags = [...new Set([...p.tags, ...o.outcomeTags])];
    return { ...p, ...outcomeRest, displayTags };
  });
}

const Portfolio: React.FC = () => {
  const mergedProjects = useMemo(() => mergeProjects(projects), []);
  const [active, setActive] = useState<MergedProject | null>(null);

  const close = useCallback(() => setActive(null), []);

  const hasOutcome = (p: MergedProject) => Boolean(p.goal && p.outcome);

  return (
    <section id="portfolio" className={`portfolio-section ${styles.section}`}>
      <div className="portfolio-section-deco" aria-hidden>
        <span />
        <span />
      </div>

      <div className={styles.container}>
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSection}
          transition={{ ...transitionSilky, duration: 0.8 }}
          className="portfolio-intro-head"
        >
          <div className="portfolio-intro-head-main">
            <span className="portfolio-eyebrow">
              {portfolioOutcomesIntro.eyebrow}
            </span>
            <h2 className={styles.introTitle}>
              {portfolioOutcomesIntro.titleLine1}
              <br />
              <span className={styles.introAccent}>
                {portfolioOutcomesIntro.titleAccent}
              </span>
            </h2>
          </div>
          <p className="portfolio-lead">{portfolioOutcomesIntro.lead}</p>
        </motion.header>

        <motion.div
          className={styles.eraWrap}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSection}
          transition={{ ...transitionSilky, duration: 0.78 }}
        >
          <div className={styles.eraBlock}>
            <h3 className={styles.eraTitle}>{eraNarrative.title}</h3>
            <div className={styles.eraRow}>
              {eraNarrative.blocks.map((b) => (
                <div key={b.label}>
                  <p className={styles.eraItemLabel}>{b.label}</p>
                  <p className={styles.eraItemBody}>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="portfolio-cards">
          {mergedProjects.map((project) => (
            <article
              key={project.id}
              className="portfolio-card"
              onClick={() => setActive(project)}
            >
              <div className="portfolio-card-media">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
                <span className="portfolio-card-cat">{project.category}</span>
                <div className="portfolio-card-overlay">
                  <div className="portfolio-card-actions">
                    <button
                      type="button"
                      className="portfolio-card-iconbtn portfolio-card-iconbtn--light"
                      aria-label={`查看 ${project.title} 详情`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(project);
                      }}
                    >
                      <ExternalLink className={styles.iconSm} strokeWidth={2} />
                    </button>
                    <button
                      type="button"
                      className="portfolio-card-iconbtn portfolio-card-iconbtn--ghost"
                      aria-label="代码仓库（示例）"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className={styles.iconSm} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{project.title}</h3>
                {hasOutcome(project) && (
                  <p className={styles.phaseLine}>
                    {project.phase} · {project.timeline}
                  </p>
                )}
                {hasOutcome(project) && !!project.highlights?.length && (
                  <div className={styles.highlightRow}>
                    {project.highlights.slice(0, 3).map((h) => (
                      <span key={h} className={styles.highlightTag}>
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                <div className={styles.cardGrow}>
                  <p className={`portfolio-card-desc ${styles.mergedDesc}`}>
                    {project.desc}
                  </p>
                  {hasOutcome(project) && (
                    <div className={styles.outcomeCompact}>
                      <div
                        className={`${styles.summaryBlock} ${styles.goalBlock}`}
                      >
                        <span className={styles.miniLabel}>目标</span>
                        <p className={styles.summaryText}>{project.goal}</p>
                      </div>
                      <div
                        className={`${styles.summaryBlock} ${styles.resultBlock}`}
                      >
                        <span
                          className={`${styles.miniLabel} ${styles.resultLabel}`}
                        >
                          结果
                        </span>
                        <p className={styles.summaryText}>{project.outcome}</p>
                      </div>
                      <div
                        className={`${styles.summaryBlock} ${styles.actionBlock}`}
                      >
                        <span className={styles.miniLabel}>关键动作</span>
                        <p className={styles.summaryText}>
                          {project.actions?.[0] ?? "——"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        rootClassName="portfolio-detail-modal-root"
        open={!!active}
        onCancel={close}
        footer={null}
        centered
        width="min(92vw, 960px)"
        destroyOnClose
        closable={false}
        styles={{
          body: { padding: 0 },
        }}
      >
        {active && (
          <div className="portfolio-detail">
            <div className="portfolio-detail-toolbar">
              <h3 className={`portfolio-detail-title ${styles.modalTitle}`}>
                {active.title}
              </h3>
              <button
                type="button"
                className="portfolio-detail-close"
                onClick={close}
                aria-label="关闭"
              >
                <X className="portfolio-detail-close-icon" strokeWidth={2.25} />
              </button>
            </div>
            <div className="portfolio-detail-shot">
              <img
                src={active.image}
                alt={`${active.title} 完整截图`}
                className="portfolio-detail-shot-img"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="portfolio-detail-copy">
              {hasOutcome(active) && !!active.highlights?.length && (
                <div className={styles.modalDetailSection}>
                  <h4 className={styles.modalSectionLabel}>成果快照</h4>
                  <div className={styles.modalHighlightRow}>
                    {active.highlights.map((h) => (
                      <span key={h} className={styles.highlightTag}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.modalDetailSection}>
                <div className={styles.modalCaseCard}>
                  <h4 className={styles.modalCaseCardTitle}>实现与验证</h4>
                  <div className={styles.modalCaseRows}>
                    {active.detailParagraphs.map((p, i) => (
                      <p key={i} className={styles.modalCaseItem}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {hasOutcome(active) && (
                <div className={styles.modalDetailSection}>
                  <h4 className={styles.modalSectionLabel}>结果与影响</h4>
                  <div className={styles.modalMetaRow}>
                    <span className={styles.modalMetaChip}>{active.phase}</span>
                    <span className={styles.modalMetaChip}>
                      {active.timeline}
                    </span>
                    {active.myRole && (
                      <span className={styles.modalMetaChip}>
                        {active.myRole}
                      </span>
                    )}
                  </div>
                  <div className={styles.modalSpecTable}>
                    <div className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>目标</span>
                      <span className={styles.modalPlainText}>
                        {active.goal}
                      </span>
                    </div>
                    <div className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>
                        背景（冲突）
                      </span>
                      <span className={styles.modalPlainText}>
                        {active.context}
                      </span>
                    </div>
                    <div className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>
                        决策（取舍）
                      </span>
                      <span className={styles.modalPlainText}>
                        {active.tradeoff}
                      </span>
                    </div>
                    <div className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>
                        行动（主导）
                      </span>
                      <span className={styles.modalPlainText}>
                        {active.ownership}
                      </span>
                    </div>
                    <div className={styles.modalPlainItemActions}>
                      <span className={styles.modalPlainLabel}>
                        关键动作（方法）
                      </span>
                      <ul className={styles.modalActionList}>
                        {active.actions?.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>
                        结果（数字）
                      </span>
                      <span className={styles.modalPlainText}>
                        {active.outcome}
                      </span>
                    </div>
                    <div className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>
                        沉淀（可复用）
                      </span>
                      <span className={styles.modalPlainText}>
                        {active.reusability}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
