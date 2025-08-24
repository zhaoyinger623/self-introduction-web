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
          作品
        </motion.h2>
        <div className={styles.portfolioGrid}>
          <motion.div
            className={styles.portfolioItem}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
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
              <div className={styles.portfolioTags}>
                <span>React</span>
                <span>TypeScript</span>
                <span>Ant Design</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.portfolioItem}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.portfolioImage}>
              <div className={styles.portfolioOverlay}>
                <h4>数据可视化</h4>
                <p>Vue + ECharts + D3.js</p>
              </div>
            </div>
            <div className={styles.portfolioInfo}>
              <h3>企业数据看板</h3>
              <p>实时数据监控和可视化展示，支持多种图表类型</p>
              <div className={styles.portfolioTags}>
                <span>Vue</span>
                <span>ECharts</span>
                <span>D3.js</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.portfolioItem}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.portfolioImage}>
              <div className={styles.portfolioOverlay}>
                <h4>移动应用</h4>
                <p>React Native + Redux</p>
              </div>
            </div>
            <div className={styles.portfolioInfo}>
              <h3>跨平台移动应用</h3>
              <p>支持iOS和Android的移动应用，优秀的用户体验</p>
              <div className={styles.portfolioTags}>
                <span>React Native</span>
                <span>Redux</span>
                <span>移动端</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
