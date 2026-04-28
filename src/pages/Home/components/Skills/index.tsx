import { motion } from "framer-motion";
import styles from "./index.module.less";
import {
  fadeUpItem,
  staggerContainer,
  transitionSilky,
  viewportSection,
} from "../../../../motion/config";
import { skillGroups, skillsIntro } from "./skills.mock";

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSection}
          transition={{ ...transitionSilky, duration: 0.75 }}
        >
          <span className={styles.eyebrow}>{skillsIntro.eyebrow}</span>
          <h2 className={styles.title}>{skillsIntro.title}</h2>
          <p className={styles.lead}>{skillsIntro.lead}</p>
        </motion.header>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSection}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.id}
              variants={fadeUpItem}
              className={styles.card}
            >
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <p className={styles.cardSubtitle}>{group.subtitle}</p>
              <ul className={styles.tagList} aria-label={group.title}>
                {group.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
