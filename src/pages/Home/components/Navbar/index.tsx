import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./index.module.less";
import { easeSilky } from "../../../../motion/config";

const PHONE = "13018269809";
const WECHAT = "zhaoyingerya";

const Navbar: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  const handleClose = () => {
    setShowContact(false);
  };

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
          <a href="#roles">角色</a>
          <a href="#experience">经历</a>
          <a href="#portfolio">作品</a>
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.cta}
          onClick={handleContactClick}
        >
          联系我
        </motion.button>
      </div>

      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.25, ease: easeSilky }}
            className={styles.modal}
          >
            <button className={styles.closeBtn} onClick={handleClose}>
              ×
            </button>
            <h3 className={styles.modalTitle}>联系方式</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>电话</span>
                <span className={styles.contactValue}>{PHONE}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>微信</span>
                <span className={styles.contactValue}>{WECHAT}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
