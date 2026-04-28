import { motion } from "framer-motion";
import { BookOpen, CalendarSync, GraduationCap } from "lucide-react";
import componentsDoc from "../../../../assets/components-doc.png";
import styles from "./index.module.less";
import {
  fadeUpItem,
  staggerContainer,
  transitionSilky,
  viewportSection,
} from "../../../../motion/config";
import { teamHighlights, teamLeadershipIntro } from "./mock";

const icons = [CalendarSync, GraduationCap, BookOpen] as const;

const TeamLeadership: React.FC = () => {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSection}
          transition={{ ...transitionSilky, duration: 0.75 }}
        >
          <span className={styles.eyebrow}>{teamLeadershipIntro.eyebrow}</span>
          <h2 className={styles.title}>{teamLeadershipIntro.title}</h2>
          <p className={styles.lead}>{teamLeadershipIntro.lead}</p>
        </motion.header>

        <div className={styles.layout}>
          <motion.figure
            className={styles.figure}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSection}
            transition={{ ...transitionSilky, duration: 0.78, delay: 0.06 }}
          >
            <div className={styles.shotFrame}>
              <img
                src={componentsDoc}
                alt="基于 Rspress 的 HR 工作平台组件文档：侧栏导航、Props 表与示例预览"
                className={styles.shotImg}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className={styles.caption}>
              HR 工作平台组件文档（Rspress）：桌面端组件目录、API 说明与示例同页可查
            </figcaption>
          </motion.figure>

          <motion.ul
            className={styles.highlightList}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSection}
          >
            {teamHighlights.map((item, i) => {
              const Icon = icons[i] ?? BookOpen;
              return (
                <motion.li
                  key={item.id}
                  variants={fadeUpItem}
                  className={styles.highlightCard}
                >
                  <span className={styles.iconWrap} aria-hidden>
                    <Icon className={styles.icon} strokeWidth={2} />
                  </span>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default TeamLeadership;
