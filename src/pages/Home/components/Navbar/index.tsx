import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import styles from "./index.module.less";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <motion.div
        className={styles.navBrand}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Code className={styles.navIcon} />
        <span>前端开发者</span>
      </motion.div>
      <motion.div
        className={styles.navLinks}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="#about">关于我</a>
        <a href="#skills">技能</a>
        <a href="#portfolio">作品</a>
        <a href="#experience">经历</a>
        <a href="#interests">兴趣</a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
