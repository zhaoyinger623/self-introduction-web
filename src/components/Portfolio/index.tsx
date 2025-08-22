import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.less";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          精选作品
        </motion.h2>
        <div className={styles.portfolioGrid}>
          <motion.div
            className={styles.portfolioItem}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.portfolioImage}>
              <div className={styles.portfolioOverlay}>
                <h4>电商平台</h4>
                <p>React + TypeScript + Ant Design</p>
              </div>
            </div>
            <div className={styles.portfolioInfo}>
              <h3>现代电商解决方案</h3>
              <p>完整的电商平台，包含商品管理、购物车、支付等核心功能</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
