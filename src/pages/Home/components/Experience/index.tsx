import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Star } from "lucide-react";
import styles from "./index.module.less";

const Experience: React.FC = () => {
  return (
    <section id="experience" className={`${styles.section} ${styles.bgLight}`}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          工作经历
        </motion.h2>
        <div className={styles.timeline}>
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.timelineMarker}>
              <Briefcase />
            </div>
            <div className={styles.timelineContent}>
              <h3>高级前端开发工程师</h3>
              <h4>某知名互联网公司</h4>
              <p className={styles.timelineDate}>2022 - 至今</p>
              <p>
                负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目，推动前端技术栈升级。
              </p>
              <ul>
                <li>重构了公司主要产品的前端架构，提升性能30%</li>
                <li>建立了前端开发规范和最佳实践</li>
                <li>指导初级开发人员，提升团队整体技术水平</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.timelineMarker}>
              <Award />
            </div>
            <div className={styles.timelineContent}>
              <h3>前端开发工程师</h3>
              <h4>某科技创业公司</h4>
              <p className={styles.timelineDate}>2020 - 2022</p>
              <p>
                参与公司产品的从0到1开发，负责前端技术选型和架构设计，积累了丰富的创业公司经验。
              </p>
              <ul>
                <li>独立完成公司官网和后台管理系统的开发</li>
                <li>优化了移动端用户体验，转化率提升25%</li>
                <li>建立了完整的CI/CD流程</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.timelineMarker}>
              <Star />
            </div>
            <div className={styles.timelineContent}>
              <h3>前端开发实习生</h3>
              <h4>某传统企业</h4>
              <p className={styles.timelineDate}>2019 - 2020</p>
              <p>
                开始前端开发之旅，学习基础技术，参与企业内部系统的维护和优化。
              </p>
              <ul>
                <li>学习了HTML、CSS、JavaScript基础</li>
                <li>参与企业官网的改版项目</li>
                <li>掌握了前端工程化的基本概念</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
