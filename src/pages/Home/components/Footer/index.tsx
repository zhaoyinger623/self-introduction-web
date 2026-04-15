import { motion } from "framer-motion";
import styles from "./index.module.less";
import { transitionSilky } from "../../../../motion/config";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitionSilky}
    >
      <div className={styles.inner}>
        <div className={styles.row}>
          <p className={styles.copy}>
            © 2026 Zhao Yingyue. Crafted with Art & Code.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
