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
              <div className={styles.skillItem}>
                <span>Vue.js</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
              </div>
              <div className={styles.skillItem}>
                <span>TypeScript</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>设计能力</h3>
            <div className={styles.skillItems}>
              <div className={styles.skillItem}>
                <span>UI/UX设计</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </div>
              <div className={styles.skillItem}>
                <span>动画设计</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.0 }}
                  />
                </div>
              </div>
              <div className={styles.skillItem}>
                <span>响应式设计</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>工具 & 平台</h3>
            <div className={styles.skillItems}>
              <div className={styles.skillItem}>
                <span>Git</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.4 }}
                  />
                </div>
              </div>
              <div className={styles.skillItem}>
                <span>Webpack/Vite</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.6 }}
                  />
                </div>
              </div>
              <div className={styles.skillItem}>
                <span>Figma</span>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.8 }}
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
