import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import cdutLogo from "../../../../assets/cdut.png";
import cmbLogo from "../../../../assets/cmbbank.png";
import ximaLogo from "../../../../assets/ximalogo.png";
import styles from "./index.module.less";
import {
  fadeUpItem,
  staggerContainer,
  transitionSilky,
  viewportSection,
} from "../../../../motion/config";

const careerData = [
  {
    role: "前端技术负责人",
    org: "喜马拉雅",
    logo: ximaLogo,
    period: "2023年7月至今",
    summary:
      "统筹前端团队流程与进度，主导核心业务系统前端架构设计，持续推动效率提升与跨角色协同交付。",
    outcomes: [
      "搭建战略与人力协同系统，覆盖组织架构与人才全生命周期管理。",
      "推动低代码平台稳定运行 16 个月，支撑 400+ 应用与 1300+ 页面搭建。",
      "建立前端规范与组件机制，系统首年故障率控制在 <0.5%。",
      "承担 UI 与产品方案协作，形成「原型→设计→开发」闭环交付。",
    ],
    badges: ["2024年度优秀员工", "2024年度AI创新一等奖", "2025晋升成功"],
  },
  {
    role: "前端开发工程师",
    org: "招商银行·招银网络科技",
    logo: cmbLogo,
    period: "2021年7月 - 2023年7月",
    summary:
      "负责中间业务收入定价系统 PC/移动端前端重构，协同后端完成日常迭代，并兼任产品管理系统项目协作。",
    outcomes: [
      "主导核心页面重构，显著优化稳定性与交互一致性。",
      "承担跨团队需求推进，保障重点项目按期上线。",
    ],
    badges: ["优秀新员工", "前端编程比赛第一名", "团队创新大赛多项一等奖"],
  },
  {
    role: "计算机科学与技术",
    org: "成都理工大学（双一流）",
    logo: cdutLogo,
    period: "2017年9月 - 2021年6月",
    summary:
      "系统学习计算机基础与软件工程方法，形成扎实的工程思维与问题拆解能力。",
    outcomes: ["GPA 3.5/5.0", "专业排名前10%"],
    badges: ["国家优秀奖学金", "校级优秀干部", "校级优秀毕业生", "院级优秀学生"],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className={`experience-section ${styles.section}`}
    >
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSection}
          transition={{ ...transitionSilky, duration: 0.82 }}
          className="experience-heading"
        >
          <span>Career Journey</span>
          <h2>从校园到职场的成长路径</h2>
          <p>聚焦真实职责、关键成果与阶段性荣誉，呈现完整的工作经历沉淀。</p>
        </motion.div>

        <motion.div
          className="experience-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSection}
        >
          {careerData.map((item, index) => (
            <motion.article
              key={item.role}
              variants={fadeUpItem}
              className={`experience-panel ${index === 0 ? "experience-panel-featured" : ""}`}
            >
              <div className="experience-panel-head">
                <div>
                  <h3>{item.role}</h3>
                  <div className="experience-meta-row">
                    <p className="experience-meta-item">
                      <span className="experience-meta-icon" aria-hidden>
                        <MapPin className={styles.metaIconSvg} />
                      </span>
                      {item.org}
                    </p>
                    <p className="experience-meta-item">
                      <span className="experience-meta-icon" aria-hidden>
                        <CalendarDays className={styles.metaIconSvg} />
                      </span>
                      {item.period}
                    </p>
                  </div>
                </div>
                <span className="experience-logo">
                  <img src={item.logo} alt={item.org} />
                </span>
              </div>
              <p className="experience-summary">{item.summary}</p>
              <ul className="experience-list">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <div className="experience-badges">
                {item.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
