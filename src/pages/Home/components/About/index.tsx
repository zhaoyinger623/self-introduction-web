import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./index.module.less";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          关于我
        </motion.h2>
        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>热爱编程，追求完美</h3>
            <p>
              我是一名充满激情的前端开发工程师，拥有丰富的Web开发经验。我不仅专注于代码质量，更注重用户体验和视觉设计。
            </p>
            <p>
              我相信优秀的前端开发应该是技术与艺术的完美结合，每一行代码都应该为用户带来愉悦的体验。
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Github />
              </a>
              <a href="#" className={styles.socialLink}>
                <Linkedin />
              </a>
              <a href="#" className={styles.socialLink}>
                <Mail />
              </a>
            </div>
          </motion.div>
          <motion.div
            className={styles.aboutStats}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.statItem}>
              <h4>3+</h4>
              <p>年开发经验</p>
            </div>
            <div className={styles.statItem}>
              <h4>50+</h4>
              <p>完成项目</p>
            </div>
            <div className={styles.statItem}>
              <h4>100%</h4>
              <p>客户满意度</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
