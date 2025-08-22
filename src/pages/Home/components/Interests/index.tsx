import React from "react";
import { motion } from "framer-motion";
import { Palette, Globe, Users, Smartphone } from "lucide-react";
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
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.interestIcon}>
              <Palette />
            </div>
            <h3>设计创作</h3>
            <p>
              热爱UI/UX设计，喜欢探索新的设计趋势和创意灵感。擅长将设计理念转化为代码实现。
            </p>
          </motion.div>

          <motion.div
            className={styles.interestCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.interestIcon}>
              <Globe />
            </div>
            <h3>技术探索</h3>
            <p>
              持续关注前端技术发展，喜欢尝试新技术，参与开源项目，与社区共同成长。
            </p>
          </motion.div>

          <motion.div
            className={styles.interestCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.interestIcon}>
              <Users />
            </div>
            <h3>团队协作</h3>
            <p>
              良好的沟通能力和团队合作精神，喜欢分享知识，帮助团队成员共同提升。
            </p>
          </motion.div>

          <motion.div
            className={styles.interestCard}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.interestIcon}>
              <Smartphone />
            </div>
            <h3>移动优先</h3>
            <p>
              专注于移动端用户体验，研究移动端设计模式和交互方式，追求极致的移动体验。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
