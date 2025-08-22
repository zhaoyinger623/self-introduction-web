import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.less";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.footerContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; 2024 前端开发工程师. 用代码创造美好体验.</p>
          <div className={styles.footerLinks}>
            <a href="#about">关于我</a>
            <a href="#skills">技能</a>
            <a href="#portfolio">作品</a>
            <a href="#experience">经历</a>
            <a href="#interests">兴趣</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
