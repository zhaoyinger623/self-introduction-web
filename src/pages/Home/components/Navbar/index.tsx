import { motion } from "framer-motion";
import styles from "./index.module.less";
import { easeSilky } from "../../../../motion/config";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeSilky }}
    >
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.brand}
        >
          赵莹玥®
        </motion.div>

        <div className={styles.links}>
          <a href="#about">关于</a>
          <a href="#experience">经历</a>
          <a href="#portfolio">作品</a>
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.cta}
        >
          联系我
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
