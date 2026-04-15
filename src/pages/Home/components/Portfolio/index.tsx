import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Modal } from "antd";
import employeePromotion from "../../../../assets/employee-promotion.png";
import employeeTransfer from "../../../../assets/employee-transfer.png";
import versionManagement from "../../../../assets/version-management.png";
import styles from "./index.module.less";
import {
  fadeUpItem,
  staggerContainer,
  transitionSilky,
  viewportSection,
} from "../../../../motion/config";

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
];

const Portfolio: React.FC = () => {
  const [active, setActive] = useState<Project | null>(null);

  const close = useCallback(() => setActive(null), []);

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
            <span className="portfolio-eyebrow">项目介绍</span>
            <h2 className={styles.introTitle}>
              主导核心项目，
              <br />
              <span className={styles.introAccent}>驱动业务增长</span>
            </h2>
          </div>
          <p className="portfolio-lead">
            三个从 0 到 1 或攻坚交付的 B
            端系统案例，覆盖架构、移动端与多端协同，体现工程与业务双线推进能力。
          </p>
        </motion.header>

        <motion.div
          className="portfolio-cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSection}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUpItem}
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
                <p className="portfolio-card-desc line-clamp-3">
                  {project.desc}
                </p>
                <div className="portfolio-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
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
              {active.detailParagraphs.map((p, i) => (
                <p key={i} className="portfolio-detail-para">
                  {p}
                </p>
              ))}
              <div className="portfolio-detail-tags">
                {active.tags.map((tag) => (
                  <span key={tag} className="portfolio-tag">
                    {tag}
                  </span>
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
