import { motion } from "framer-motion";
import styles from "./index.module.less";
import {
  fadeUpItem,
  staggerContainer,
  transitionSilky,
  viewportSection,
} from "../../../../motion/config";

const highlights = [
  "技术方案与需求价值对齐，确保每次投入可衡量",
  "重视跨团队协作，降低沟通摩擦与返工成本",
  "以稳定性、性能和体验三维度驱动长期收益",
];

const capabilityCards = [
  {
    title: "业务洞察",
    desc: "快速识别核心场景与关键指标，用可执行方案支撑业务目标。",
  },
  {
    title: "系统设计",
    desc: "兼顾扩展性与维护成本，构建可复用、可迭代的前端架构。",
  },
  {
    title: "交付质量",
    desc: "通过规范、评审与监控机制，持续保障上线稳定与响应效率。",
  },
  {
    title: "团队协同",
    desc: "在产品、设计、研发之间建立清晰协作节奏，提升整体执行力。",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className={`about-section ${styles.section}`}>
      <div className={styles.container}>
        <div className="about-main-grid">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSection}
            transition={{ ...transitionSilky, duration: 0.82 }}
            className="about-photo-group"
          >
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1200"
              alt="女性登山者眺望山景"
              className="about-photo about-photo-main"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=900"
              alt="专业工作场景"
              className="about-photo about-photo-float"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSection}
            transition={{ ...transitionSilky, duration: 0.82, delay: 0.08 }}
            className="about-copy"
          >
            <span className="about-eyebrow">Why Me</span>
            <h2 className="about-title">突破能力边界，实现角色转型</h2>
            <p className="about-lead">
              在项目实践中，我以「技术 + 设计 + 产品」三重角色推进核心功能，
              让复杂方案可落地、可协作、可持续。目标不仅是完成开发，而是让每次交付都能转化为业务价值。
            </p>
            <ul className="about-checklist">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#portfolio" className="about-cta">
              查看核心项目
            </a>
          </motion.div>
        </div>

        <div className="about-capability">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSection}
            transition={{ ...transitionSilky, duration: 0.8 }}
            className="about-capability-media"
          >
            <img
              src="https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&q=80&w=1200"
              alt="系统化工作方式"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            className="about-capability-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSection}
          >
            {capabilityCards.map((card) => (
              <motion.article
                key={card.title}
                variants={fadeUpItem}
                className="about-capability-card"
              >
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
