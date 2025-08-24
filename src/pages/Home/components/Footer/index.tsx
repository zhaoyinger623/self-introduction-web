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
          <p>&copy; 赵莹玥 前端开发工程师. 用代码创造美好体验.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
