import React from "react";
import { motion } from "framer-motion";
import { Rabbit } from "lucide-react";
import styles from "./index.module.less";

const Navbar: React.FC = () => {
  const handleClick = (id: string) => () => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <motion.div
        className={styles.navBrand}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Rabbit className={styles.navIcon} />
        <span>赵莹玥-前端开发工程师</span>
      </motion.div>
      <motion.div
        className={styles.navLinks}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div onClick={handleClick("about")}>关于我</div>
        <div onClick={handleClick("portfolio")}>作品</div>
        <div onClick={handleClick("experience")}>工作经历</div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
