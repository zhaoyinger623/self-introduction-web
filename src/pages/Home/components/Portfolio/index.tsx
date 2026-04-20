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
    desc: "在晋升系统从0到1的全链路建设中，以“技术攻坚 + 跨角色补位 + 质量交付”三重能力突破项目难点。",
    detailParagraphs: [
      "主导晋升系统从 0 到 1 的建设，覆盖需求澄清、流程建模、评审规则配置与结果落地，在复杂组织场景下保证流程可解释、可追溯。",
      "在关键节点承担技术攻坚与跨角色沟通，与业务、HR、法务等多方对齐口径，推动方案在约束条件下按期上线。",
      "通过评审看板、权限与审计设计，降低操作风险；配合联调与灰度策略，保障高峰期评审体验与数据一致性。",
    ],
    tags: ["流程治理", "跨部门协作", "高质量交付"],
    link: "#",
  },
  {
    id: "transfer",
    title: "异动系统",
    category: "Mobile Development",
    image: employeeTransfer,
    desc: "在技术团队、产品经理、业务方均发生人员更换的艰难处境下，一个月内梳理已有逻辑，落地移动端系统开发。",
    detailParagraphs: [
      "在团队与业务方人员更替的背景下，快速梳理历史逻辑与数据口径，输出可执行的迭代计划，在约一个月内完成移动端核心链路交付。",
      "针对异动申请、审批与通知等场景做信息架构与交互收敛，兼顾一线使用效率与管理合规要求。",
      "与后端、测试协同推进接口契约与回归范围，在有限时间内控制变更风险，保障上线后业务可连续运转。",
    ],
    tags: ["快速接手", "移动端重构", "复杂协同"],
    link: "#",
  },
  {
    id: "version",
    title: "版本管理系统",
    category: "Product Management",
    image: versionManagement,
    desc: "设计并实现了多端适配的版本管理系统，支持Web、移动端等多种平台。",
    detailParagraphs: [
      "从业务目标出发设计版本管理模型，覆盖版本规划、发布节奏、变更记录与回滚策略，支撑多端产品协同迭代。",
      "实现 Web 与移动端的统一能力底座与差异化展示，在复杂权限与数据同步场景下保持体验一致、操作可预期。",
      "推动与研发、测试、运维的流程衔接，通过可视化与通知机制降低沟通成本，支撑稳定、可审计的发布闭环。",
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
    desc: "在平台能力薄弱与外采受限背景下，主导飞块 3.0 方案设计与前端架构升级，推动低代码能力从“可用”走向“可规模化复用”。",
    detailParagraphs: [
      "基于业务和用户视角完成低代码产品调研，结合飞块 2.0 的能力边界，规划 MVP 并提出模块化 + 可视化配置架构。",
      "主导平台关键能力设计与前端实现，兼顾可扩展性、组件标准化和搭建体验，确保复杂场景可落地。",
      "通过指引文档、模板案例与推广支持，降低上手门槛，推动多业务团队自主搭建并稳定使用。",
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
    desc: "围绕价值投资打造多 Agent 投研系统，前端同步落地 PC 与 iOS 双端，打通“分析—任务—复盘”闭环。",
    detailParagraphs: [
      "后端基于 FastAPI 构建多智能体编排：以统一对话入口承接请求，通过意图路由分流到股票分析、Mission 任务流、模型工坊等链路，并用 SSE 持续输出推理、工具调用与结果片段。",
      "面向长任务场景，引入 Plan-and-Execute 与状态机，把“创建任务→规划→确认→执行→落库→定时再跑”标准化，保证过程可解释、可复盘、可调度。",
      "前端侧由我主导完成 PC 与 iOS 双端实现：统一信息架构与交互语言，做事件流可视化与任务状态呈现，让业务方在移动场景也能及时查看进度、结论与复盘产物。",
    ],
    tags: ["多Agent", "PC+iOS 双端", "SSE 流式", "任务编排"],
    link: "#",
  },
];

function mergeProjects(list: Project[]): MergedProject[] {
  const map = new Map(
    projectOutcomes.map((o) => [o.projectId, o] as const),
  );
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
                  <p
                    className={`portfolio-card-desc ${styles.mergedDesc}`}
                  >
                    {project.desc}
                  </p>
                  {hasOutcome(project) && (
                    <div className={styles.outcomeCompact}>
                      <div className={`${styles.summaryBlock} ${styles.goalBlock}`}>
                        <span className={styles.miniLabel}>目标</span>
                        <p className={styles.summaryText}>{project.goal}</p>
                      </div>
                      <div className={`${styles.summaryBlock} ${styles.resultBlock}`}>
                        <span className={`${styles.miniLabel} ${styles.resultLabel}`}>
                          结果
                        </span>
                        <p className={styles.summaryText}>{project.outcome}</p>
                      </div>
                      <div className={`${styles.summaryBlock} ${styles.actionBlock}`}>
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
              {hasOutcome(active) && (
                <>
                  <h4 className={styles.modalSectionLabel}>结果与影响</h4>
                  <div className={styles.modalMetaRow}>
                    <span className={styles.modalMetaChip}>{active.phase}</span>
                    <span className={styles.modalMetaChip}>{active.timeline}</span>
                    {active.myRole && (
                      <span className={styles.modalMetaChip}>{active.myRole}</span>
                    )}
                  </div>
                  <div className={styles.modalPlainList}>
                    <p className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>目标</span>
                      <span className={styles.modalPlainText}>{active.goal}</span>
                    </p>
                    <p className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>背景（冲突）</span>
                      <span className={styles.modalPlainText}>{active.context}</span>
                    </p>
                    <p className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>决策（取舍）</span>
                      <span className={styles.modalPlainText}>{active.tradeoff}</span>
                    </p>
                    <p className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>行动（你主导）</span>
                      <span className={styles.modalPlainText}>{active.ownership}</span>
                    </p>
                  </div>
                  <div className={styles.modalPlainList}>
                    <p className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>关键动作（方法）</span>
                    </p>
                    <ul className={styles.modalActionList}>
                      {active.actions?.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.modalPlainList}>
                    <p className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>结果（数字）</span>
                      <span className={styles.modalPlainText}>{active.outcome}</span>
                    </p>
                    <p className={styles.modalPlainItem}>
                      <span className={styles.modalPlainLabel}>沉淀（可复用）</span>
                      <span className={styles.modalPlainText}>{active.reusability}</span>
                    </p>
                  </div>
                  {!!active.highlights?.length && (
                    <div className={styles.modalHighlightRow}>
                      {active.highlights.map((h) => (
                        <span key={h} className={styles.highlightTag}>
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
              <h4 className={styles.modalSectionLabel}>案例与实现</h4>
              <div className={styles.modalCaseList}>
                {active.detailParagraphs.map((p, i) => (
                  <p key={i} className={styles.modalCaseItem}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
