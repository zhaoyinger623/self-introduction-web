import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import styles from "./index.module.less";
import {
  transitionSilkySlow,
  viewportSection,
} from "../../../../motion/config";

const PHONE = "13018269809";
const WECHAT = "zhaoyingerya";

const CTA: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportSection}
          transition={{ ...transitionSilkySlow, duration: 1.05 }}
          className={styles.cardWrap}
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200"
            alt=""
            className={styles.bgImg}
            referrerPolicy="no-referrer"
          />
          {/* <div className={styles.gradient1} />
          <div className={styles.gradient2} /> */}

          <div className={styles.content}>
            <div className={styles.panel}>
              <h2 className={styles.title}>
                Product vision meets
                <br />
                <span className={styles.titleItalic}>front-end craft</span>
              </h2>

              <p className={styles.body}>
                I&apos;m a product manager and front-end engineer—I ship end to
                end, from discovery and prioritization to polished, performant
                interfaces. I&apos;m looking for teams where strategy and
                execution both matter. If that sounds like your next hire,
                let&apos;s talk.
              </p>

              <div className={styles.contact} aria-label="Contact">
                <p className={styles.contactLine}>
                  <Phone className={styles.icon} strokeWidth={2} aria-hidden />
                  <span className={styles.phoneUnderline}>PHONE: {PHONE}</span>
                </p>
                <p className={styles.contactLine}>
                  <MessageCircle
                    className={styles.icon}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>WeChat: {WECHAT}</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
