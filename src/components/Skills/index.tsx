import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.less";

const Skills: React.FC = () => {
  return (
    <section id="skills" className={`${styles.section} ${styles.bgLight}`}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          技术栈 & 能力
        </motion.h2>
        <div className={styles.skillsGrid}>
          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>前端技术</h3>
            <div className={styles.skillItems}>
              <div className={styles.skillItem}>
                <span>React</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
