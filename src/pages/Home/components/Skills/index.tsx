import { motion } from "framer-motion";
import styles from "./index.module.less";

const skillGroups = [
  {
    title: "前端技术",
    skills: [
      { name: "React", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    title: "设计能力",
    skills: [
      { name: "UI/UX设计", level: 90 },
      { name: "动画设计", level: 95 },
      { name: "响应式设计", level: 88 },
    ],
  },
  {
    title: "工具 & 平台",
    skills: [
      { name: "Git", level: 92 },
      { name: "Webpack/Vite", level: 85 },
      { name: "Figma", level: 80 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.deco} aria-hidden />

      <div className={styles.container}>
        <div className={styles.headerRow}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.eyebrow}>Expertise</span>
            <h2 className={styles.sectionTitle}>技术栈 & 能力</h2>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.groupCol}
            >
              <h3 className={styles.groupTitle}>
                <span className={styles.groupTitleLine} />
                {group.title}
              </h3>
              <div className={styles.skillList}>
                {group.skills.map((skill, sIdx) => (
                  <div key={skill.name} className={styles.skillBlock}>
                    <div className={styles.skillRowTop}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.level}>{skill.level}%</span>
                    </div>
                    <div className={styles.track}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className={
                          sIdx % 2 === 0 ? styles.barFill : styles.barFillAlt
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
