import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
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
                负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
