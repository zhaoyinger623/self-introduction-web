import { motion } from "framer-motion";
import styles from "./index.module.less";
import {
  fadeUpItem,
  staggerContainer,
  transitionSilky,
  viewportSection,
} from "../../../../motion/config";
import {
  leadershipKeywords,
  roleBoundariesIntro,
  rolePillars,
} from "./mock";

const RoleBoundaries: React.FC = () => {
  return (
    <section id="roles" className={styles.section}>
      <div className={styles.container}>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSection}
          transition={{ ...transitionSilky, duration: 0.75 }}
        >
          <span className={styles.eyebrow}>{roleBoundariesIntro.eyebrow}</span>
          <h2 className={styles.title}>{roleBoundariesIntro.title}</h2>
          <p className={styles.lead}>{roleBoundariesIntro.lead}</p>
          <div className={styles.keywordRow} aria-label="领导力行为准则对齐">
            {leadershipKeywords.map((k) => (
              <span key={k} className={styles.keywordTag}>
                {k}
              </span>
            ))}
          </div>
        </motion.header>

        <motion.div
          className={styles.pillars}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSection}
        >
          {rolePillars.map((pillar) => (
            <motion.article
              key={pillar.id}
              variants={fadeUpItem}
              className={styles.pillar}
            >
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarSubtitle}>{pillar.subtitle}</p>

              <p className={styles.blockTitle}>我负责</p>
              <ul className={styles.list}>
                {pillar.responsibilities.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <div className={styles.boundaryBox}>
                <p className={styles.boundaryTitle}>边界（不代劳）</p>
                <ul className={styles.boundaryList}>
                  {pillar.boundaries.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoleBoundaries;
