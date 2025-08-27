import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  BarChart3,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Button, Card, Row, Col, Typography, Space, Tag } from "antd";
import styles from "./index.module.less";
import employeeTransfer from "../../../../assets/employee-transfer.png";
import promotionSystem from "../../../../assets/employee-promotion.png";
import versionManagement from "../../../../assets/version-management.png";

const { Title, Paragraph, Text } = Typography;

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        {/* 顶部标题区域 */}
        <motion.div
          className={styles.headerSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title level={2} className={styles.sectionTitle}>
            我的项目作品
          </Title>
          <Paragraph className={styles.sectionSubtitle}>
            由于保密原则，只放出了脱敏后适合公开展示的项目，设计图均由我独立完成，本人享有著作权，未经本人授权不允许抄袭借鉴。
          </Paragraph>
        </motion.div>

        {/* 第一行：左边描述，右边图片 */}
        <motion.div
          className={styles.portfolioRow}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Row gutter={[60, 40]} align="middle">
            {/* 左边：项目描述 */}
            <Col xs={24} lg={12}>
              <div className={styles.portfolioContent}>
                <Title level={3} className={styles.portfolioTitle}>
                  晋升系统
                </Title>
                <Paragraph className={styles.portfolioDescription}>
                  <div>
                    在晋升系统从 0 到 1 的全链路建设中，我以 “技术攻坚 +
                    跨角色补位
                    +质量交付”。三重能力突破项目难点，成为系统落地的核心推动者：
                  </div>
                  <div>
                    技术层面：主导前端架构设计，基于业务场景封装
                    12个高复用组件，统一全链路视觉风格，保障系统按质按期上线；
                  </div>
                  <div>
                    角色补位上，主动承担产品与 UI
                    设计工作，覆盖"自荐提名-主管提名-晋升评审-晋升结果通知"全流程,协同输出方案并绘制高保真设计图。
                  </div>
                  <div>
                    不仅解决公司人才晋升流程数字化断层问题，更获业务方“上线效果超预期”
                    的高度认可，成为
                    HR团队年度核心依赖工具，为公司人才选拔与发展提供坚实技术支撑。
                  </div>
                </Paragraph>

                {/* 功能特性列表 */}
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>全流程覆盖，操作便捷</Text>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>交互清晰，用户体验优秀</Text>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>用户反馈非常好，系统评分提升2分</Text>
                  </div>
                </div>

                {/* 技术标签 */}
                <div className={styles.techTags}>
                  <Tag color="purple">React</Tag>
                  <Tag color="blue">TypeScript</Tag>
                  <Tag color="green">RsBuild</Tag>
                  <Tag color="orange">Ant Design</Tag>
                  <Tag color="cyan">ZuStand</Tag>
                </div>
              </div>
            </Col>

            {/* 右边：项目图片 */}
            <Col xs={24} lg={12}>
              <motion.div
                className={styles.portfolioImageContainer}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* <div className={styles.portfolioImage}> */}
                <img src={promotionSystem} alt="" />
                {/* </div> */}
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* 第二行：左边图片，右边描述 */}
        <motion.div
          className={styles.portfolioRow}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Row
            gutter={[60, 40]}
            align="middle"
            className={`${styles.trasferRow} ${styles.portfolioRow}`}
          >
            {/* 左边：项目图片 */}
            <Col xs={24} lg={12}>
              <motion.div
                className={styles.portfolioImageContainer}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* <div className={styles.portfolioImage}> */}
                <img src={employeeTransfer} alt="" />
                {/* </div> */}
              </motion.div>
            </Col>

            {/* 右边：项目描述 */}
            <Col xs={24} lg={12}>
              <div className={styles.portfolioContent}>
                <Title level={3} className={styles.portfolioTitle}>
                  异动系统
                </Title>
                <Paragraph className={styles.portfolioDescription}>
                  异动系统是公司内部员工进行异动操作的核心系统。我负责设计并落地了新版异动系统。面临技术团队、产品经理、业务方均发生人员更换的艰难处境，我在一个月内梳理了已有逻辑，落地了移动端系统开发，协同业务方进行功能验收，将停滞一年未成功的异动系统投入上线并使用。
                </Paragraph>

                {/* 功能特性列表 */}
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>流程优化，操作简化</Text>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>界面美观，交互友好</Text>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>性能提升，响应快速</Text>
                  </div>
                </div>

                {/* 技术标签 */}
                <div className={styles.techTags}>
                  <Tag color="purple">React</Tag>
                  <Tag color="blue">TypeScript</Tag>
                  <Tag color="green">RsBuild</Tag>
                  <Tag color="cyan">Zustand</Tag>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>

        {/* 第三行：左边描述，右边图片 */}
        <motion.div
          className={styles.portfolioRow}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Row gutter={[60, 40]} align="middle">
            {/* 左边：项目描述 */}
            <Col xs={24} lg={12}>
              <div className={styles.portfolioContent}>
                <Title level={3} className={styles.portfolioTitle}>
                  版本管理系统
                </Title>
                <Paragraph className={styles.portfolioDescription}>
                  设计并实现了多端适配的版本管理系统，支持Web、移动端等多种平台。
                  方便用户、业务管理员、未来的技术开发人员查询工作台的历史版本记录。
                </Paragraph>

                {/* 功能特性列表 */}
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>多端适配，统一体验</Text>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>版本控制，管理便捷</Text>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>发布流程，规范高效</Text>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.featureIcon} />
                    <Text>版本回溯，快速恢复</Text>
                  </div>
                </div>

                {/* 技术标签 */}
                <div className={styles.techTags}>
                  <Tag color="purple">React</Tag>
                  <Tag color="green">RsBuild</Tag>
                  <Tag color="orange">多端适配</Tag>
                </div>
              </div>
            </Col>

            {/* 右边：项目图片 */}
            <Col xs={24} lg={12}>
              <motion.div
                className={styles.portfolioImageContainer}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ width: "400px" }}
              >
                <img
                  src={versionManagement}
                  alt=""
                  style={{ width: "400px" }}
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
