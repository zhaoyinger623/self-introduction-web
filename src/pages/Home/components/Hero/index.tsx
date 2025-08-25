import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Lightbulb, Zap } from "lucide-react";
import { Button } from "antd";
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
          <h1 className={styles.heroTitle}>
            你好，欢迎访问<span className={styles.highlight}>赵莹玥</span>
            的个人网站。
            <div>很高兴认识你～</div>
          </h1>
          <div className={styles.heroDescription}>
            专注于创造美观、流畅、用户友好的Web体验
          </div>
          <div className={styles.heroDescription}>
            热爱设计，追求代码与艺术的完美结合
          </div>
          <Button
            size="large"
            className={styles.ctaButton}
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            开始了解
          </Button>
        </motion.div>
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.cardGrid}>
            <div className={`${styles.floatingCard} ${styles.cardTop}`}>
              <Code className={styles.cardIcon} />
              <span>前端开发</span>
            </div>
            <div className={`${styles.floatingCard} ${styles.cardLeft}`}>
              <Palette className={styles.cardIcon} />
              <span>UX体验</span>
            </div>
            <div className={`${styles.floatingCard} ${styles.cardRight}`}>
              <Lightbulb className={styles.cardIcon} />
              <span>产品设计</span>
            </div>
            <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
              <Zap className={styles.cardIcon} />
              <span>创新</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
