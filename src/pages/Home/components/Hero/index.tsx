import { motion } from "framer-motion";
import styles from "./index.module.less";
import { easeSilky, transitionHero } from "../../../../motion/config";

const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="home-hero-media">
        <div className={styles.videoWrap}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className={`home-hero-overlay ${styles.overlay}`} />

        <div className={`home-hero-inner ${styles.inner}`}>
          <div className={styles.innerCenter}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionHero, delay: 0.05 }}
            >
              <span className={styles.eyebrow}>
                HELLO · I AM ZHAO YINGYUE
              </span>
              <h1 className={styles.title}>
                你好，我是赵莹玥
                <br />
                <span className={`italic home-hero-line2`}>
                  前端工程师 · 产品负责人
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: transitionHero.duration,
                ease: easeSilky,
                delay: 0.22,
              }}
              className={styles.content}
            >
              <div className={styles.badgeRow}>
                <div className={styles.badge}>懂产品的前端</div>
                <div className={styles.badge}>懂交付的负责人</div>
              </div>

              <p className={`${styles.lead} home-hero-lead`}>
                擅长用技术与产品思维连接用户价值和业务目标，负责的不只是页面，
                而是从想法到结果的完整闭环，在复杂协作中持续推动高质量上线。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
