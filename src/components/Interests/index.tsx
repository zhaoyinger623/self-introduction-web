import React from "react";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import styles from "./index.module.less";

const Interests: React.FC = () => {
  return (
    <section id="interests" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          个人兴趣 & 特长
        </motion.h2>
        <div className={styles.interestsGrid}>
          <motion.div
            className={styles.interestCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.interestIcon}>
              <Palette />
            </div>
            <h3>设计创作</h3>
            <p>热爱UI/UX设计，喜欢探索新的设计趋势和创意灵感。</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
