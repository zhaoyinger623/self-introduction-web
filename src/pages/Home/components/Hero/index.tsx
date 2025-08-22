import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, ArrowDown } from "lucide-react";
import styles from "./index.module.less";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            你好，我是<span className={styles.highlight}>前端开发工程师</span>
          </h1>
          <p>专注于创造美观、流畅、用户友好的Web体验</p>
          <p>热爱设计，擅长动画，追求代码与艺术的完美结合</p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解更多
          </motion.button>
        </motion.div>
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.floatingCard}>
            <Code className={styles.cardIcon} />
            <span>React</span>
          </div>
          <div className={styles.floatingCard}>
            <Palette className={styles.cardIcon} />
            <span>设计</span>
          </div>
          <div className={styles.floatingCard}>
            <Zap className={styles.cardIcon} />
            <span>创新</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
