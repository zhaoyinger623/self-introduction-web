import { motion } from "framer-motion";
import { Palette, Cpu, Users, Smartphone } from "lucide-react";
import styles from "./index.module.less";

const interests = [
  {
    title: "设计创作",
    icon: Palette,
    desc: "热爱UI/UX设计，喜欢探索新的设计趋势和创意灵感。擅长将设计理念转化为代码实现。",
  },
  {
    title: "技术探索",
    icon: Cpu,
    desc: "持续关注前端技术发展，喜欢尝试新技术，参与开源项目，与社区共同成长。",
  },
  {
    title: "团队协作",
    icon: Users,
    desc: "良好的沟通能力和团队合作精神，喜欢分享知识，帮助团队成员共同提升。",
  },
  {
    title: "移动优先",
    icon: Smartphone,
    desc: "专注于移动端用户体验，研究移动端设计模式和交互方式，追求极致的移动体验。",
  },
];

const Interests: React.FC = () => {
  return (
    <section className={styles.section}>
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={styles.decoCircle}
        aria-hidden
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.eyebrow}>Beyond Work</span>
            <h2 className={styles.title}>个人兴趣 & 特长</h2>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {interests.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.item}
            >
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  <item.icon className={styles.icon} strokeWidth={2} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
