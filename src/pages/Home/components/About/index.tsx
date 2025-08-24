import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Code, Shield, Zap, Award } from "lucide-react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Divider,
  Typography,
  Space,
  Tag,
  Button,
} from "antd";
import styles from "./index.module.less";

const { Title, Paragraph, Text } = Typography;

const About: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* 顶部标题区域 */}
        <motion.div
          className={styles.headerSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.featureTag}>工作成果</div>
          <Title level={3} className={styles.evaluationTitle}>
            突破能力边界，实现角色转型
          </Title>
          {/* <Divider /> */}
          <Paragraph className={styles.evaluationText}>
            在各项目中，以{" "}
            <Text strong className={styles.highlightText}>
              "技术 + 设计 + 产品"
            </Text>{" "}
            三重角色推动核心功能突破瓶颈， 验证了从{" "}
            <Text strong className={styles.highlightText}>
              "技术执行者"
            </Text>{" "}
            到{" "}
            <Text strong className={styles.highlightText}>
              "业务赋能者"
            </Text>{" "}
            的转型能力。
          </Paragraph>
          <Paragraph className={styles.evaluationText}>
            擅长跨部门协作与团队管理，秉持{" "}
            <Text strong className={styles.highlightText}>
              "求实进取、主动担责"
            </Text>{" "}
            的理念，
            持续深耕前端技术与业务结合，致力于成为兼具专业深度与综合能力的前端技术负责人。
          </Paragraph>
        </motion.div>

        {/* 核心能力卡片 */}
        <motion.div
          className={styles.featuresSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Row gutter={[32, 32]} justify="center">
            {/* 开发经验卡片 */}
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <div className={styles.cardIconWrapper}>
                  <Code className={styles.cardIcon} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  开发经验
                </Title>
                <Paragraph className={styles.cardDescription}>
                  拥有{" "}
                  <Text strong className={styles.highlight}>
                    4年+
                  </Text>{" "}
                  前端开发经验，
                  从技术开发进阶至技术负责人，具备系统架构设计与团队管理能力
                </Paragraph>
                {/* <div className={styles.cardStats}>
                  <Statistic
                    value={4}
                    suffix="年+"
                    valueStyle={{
                      color: "#7f48e1",
                      fontSize: "24px",
                      fontWeight: "bolder",
                    }}
                  />
                </div> */}
              </Card>
            </Col>

            {/* 项目经验卡片 */}
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <div className={styles.cardIconWrapper}>
                  <Trophy className={styles.cardIcon} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  项目经验
                </Title>
                <Paragraph className={styles.cardDescription}>
                  主导过{" "}
                  <Text strong className={styles.highlight}>
                    4个
                  </Text>{" "}
                  大型项目， 以"技术+设计+产品"三重角色推动核心功能突破瓶颈
                </Paragraph>
                {/* <div className={styles.cardStats}>
                  <Statistic
                    value={4}
                    suffix="个"
                    valueStyle={{
                      color: "#7f48e1",
                      fontSize: "24px",
                      fontWeight: "bolder",
                    }}
                  />
                </div> */}
              </Card>
            </Col>

            {/* 团队管理卡片 */}
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <div className={styles.cardIconWrapper}>
                  <Users className={styles.cardIcon} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  团队管理
                </Title>
                <Paragraph className={styles.cardDescription}>
                  率领前端团队人效提升{" "}
                  <Text strong className={styles.highlight}>
                    &gt;10%
                  </Text>
                  ， 带教的校招生均能独立承担中高难度任务
                </Paragraph>
                {/* <div className={styles.cardStats}>
                  <Statistic
                    prefix=">"
                    value={10}
                    suffix="%"
                    valueStyle={{
                      color: "#7f48e1",
                      fontSize: "24px",
                      fontWeight: "bolder",
                    }}
                  />
                </div> */}
              </Card>
            </Col>

            {/* 技术能力卡片 */}
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <div className={styles.cardIconWrapper}>
                  <Zap className={styles.cardIcon} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  组件封装
                </Title>
                <Paragraph className={styles.cardDescription}>
                  封装高可复用组件{" "}
                  <Text strong className={styles.highlight}>
                    30+个
                  </Text>
                  ， 做到组件高可复用性，提高开发效率
                </Paragraph>
                {/* <div className={styles.cardStats}>
                  <Statistic
                    value={30}
                    suffix="+个"
                    valueStyle={{
                      color: "#7f48e1",
                      fontSize: "24px",
                      fontWeight: "bolder",
                    }}
                  />
                </div> */}
              </Card>
            </Col>

            {/* 系统稳定性卡片 */}
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <div className={styles.cardIconWrapper}>
                  <Shield className={styles.cardIcon} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  系统故障率
                </Title>
                <Paragraph className={styles.cardDescription}>
                  系统故障率控制在{" "}
                  <Text strong className={styles.highlight}>
                    &lt;0.5%
                  </Text>{" "}
                  ， 确保业务系统的稳定性和可靠性
                </Paragraph>
                {/* <div className={styles.cardStats}>
                  <Statistic
                    prefix="<"
                    value={0.5}
                    suffix="%"
                    precision={1}
                    valueStyle={{
                      color: "#7f48e1",
                      fontSize: "24px",
                      fontWeight: "bolder",
                    }}
                  />
                </div> */}
              </Card>
            </Col>

            {/* 综合能力卡片 */}
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <div className={styles.cardIconWrapper}>
                  <Award className={styles.cardIcon} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  综合能力
                </Title>
                <Paragraph className={styles.cardDescription}>
                  具备{" "}
                  <Text strong className={styles.highlight}>
                    全链路
                  </Text>{" "}
                  能力，
                  从架构设计到产品落地，致力于成为兼具专业深度与综合能力的技术负责人
                </Paragraph>
                {/* <div className={styles.cardStats}>
                  <Statistic
                    value={3}
                    suffix="个角色"
                    valueStyle={{
                      color: "#7f48e1",
                      fontSize: "24px",
                      fontWeight: "bolder",
                    }}
                  />
                </div> */}
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* 技能标签 */}
        <motion.div
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Title level={4} className={styles.skillsTitle}>
            核心技能
          </Title>
          <Space size={[8, 16]} wrap className={styles.skillsContainer}>
            <Tag color="purple" className={styles.skillTag}>
              前端架构设计
            </Tag>
            <Tag color="blue" className={styles.skillTag}>
              UI/UX 设计
            </Tag>
            <Tag color="green" className={styles.skillTag}>
              产品需求分析
            </Tag>
            <Tag color="orange" className={styles.skillTag}>
              团队管理
            </Tag>
            <Tag color="red" className={styles.skillTag}>
              跨部门协作
            </Tag>
            <Tag color="cyan" className={styles.skillTag}>
              技术培训
            </Tag>
            <Tag color="geekblue" className={styles.skillTag}>
              性能优化
            </Tag>
            <Tag color="volcano" className={styles.skillTag}>
              组件封装
            </Tag>
          </Space>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
