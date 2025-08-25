import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Star,
  Code,
  Calendar,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Card, Row, Col, Typography, Space, Tag, Divider, Avatar } from "antd";
import styles from "./index.module.less";
import ximalayaLogo from "../../../../assets/ximalogo.png";
import zhaoyinLogo from "../../../../assets/cmbbank.png";
import chengduLogo from "../../../../assets/cdut.png";

const { Title, Paragraph, Text } = Typography;

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        {/* 标题区域 */}
        <motion.div
          className={styles.headerSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title level={2} className={styles.sectionTitle}>
            工作经历
          </Title>
          <Paragraph className={styles.sectionSubtitle}>
            从校园到职场，从技术执行者到业务赋能者的成长历程
          </Paragraph>
        </motion.div>

        {/* 工作经历时间线 */}
        <div className={styles.experienceTimeline}>
          {/* 喜马拉雅经历 */}
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.timelineMarker}>
              <Briefcase className={styles.markerIcon} />
            </div>

            <Card className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <Title level={3} className={styles.jobTitle}>
                    前端技术负责人
                  </Title>
                  <div className={styles.companyName}>
                    <MapPin className={styles.locationIcon} />
                    喜马拉雅
                  </div>
                  <div className={styles.workPeriod}>
                    <Calendar className={styles.calendarIcon} />
                    2023年7月至今
                  </div>
                </div>
                <div className={styles.companyLogo}>
                  <img src={ximalayaLogo} alt="喜马拉雅" />
                </div>
              </div>

              <Divider className={styles.cardDivider} />

              <div className={styles.roleDescription}>
                <Title level={4} className={styles.roleTitle}>
                  核心职责
                </Title>
                <Paragraph className={styles.roleText}>
                  统筹前端团队流程与进度，主导战略级系统前端架构设计；落地前端 +
                  AI 提效技术；
                  不断突破能力边界承担起产品经理/设计师的职责，并拿到成果。
                </Paragraph>
              </div>

              <div className={styles.keyAchievements}>
                <Title level={4} className={styles.achievementsTitle}>
                  关键成果
                </Title>

                <div className={styles.achievementItem}>
                  <CheckCircle className={styles.achievementIcon} />
                  <div className={styles.achievementContent}>
                    <Text strong>战略系统架构：</Text>
                    统筹前端侧流程进度，搭建 DSTE 系统（战略管理）与 HR
                    工作台（人力资源管理），
                    覆盖组织架构、人才全生命周期管理等核心模块，推动战略管理与人力资源系统的有机结合。
                  </div>
                </div>

                <div className={styles.achievementItem}>
                  <CheckCircle className={styles.achievementIcon} />
                  <div className={styles.achievementContent}>
                    <Text strong>低代码平台：</Text>
                    主导飞块低代码平台研发，填补公司拖拽式低代码工具空白，上线后稳定运行
                    16 个月， 支撑 400+ 应用、1300+
                    页面搭建，页面开发时间从"天级"缩短至"小时级"，
                    为公司节约至少200w人力成本。
                  </div>
                </div>

                <div className={styles.achievementItem}>
                  <CheckCircle className={styles.achievementIcon} />
                  <div className={styles.achievementContent}>
                    <Text strong>团队建设：</Text>
                    积极组织复盘与沉淀，构建前端团队生态，推进前端知识分享机制，
                    建立前端开发规范与组件库机制，带领团队支撑多项目全链路交付，
                    系统首年故障率 &lt; 0.5%，团队研发效能提升 10%。
                  </div>
                </div>

                <div className={styles.achievementItem}>
                  <CheckCircle className={styles.achievementIcon} />
                  <div className={styles.achievementContent}>
                    <Text strong>跨职能闭环：</Text>
                    承担 UI
                    设计与产品方案设计，实现前端开发与设计、产品需求的无缝衔接，
                    协同AI完成【产品原型→设计图→前端代码】的业务闭环，缩短项目交付周期。
                  </div>
                </div>
              </div>

              <div className={styles.honorsSection}>
                <Title level={4} className={styles.honorsTitle}>
                  荣誉成就
                </Title>
                <div className={styles.honorsTags}>
                  <Tag color="gold" className={styles.tagItem}>
                    2024年季度优秀员工
                  </Tag>
                  <Tag color="blue" className={styles.tagItem}>
                    2024年年度AI创新大赛一等奖
                  </Tag>
                  <Tag color="green" className={styles.tagItem}>
                    2025年晋升成功
                  </Tag>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 招商银行经历 */}
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.timelineMarker}>
              <Code className={styles.markerIcon} />
            </div>

            <Card className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <Title level={3} className={styles.jobTitle}>
                    前端开发工程师
                  </Title>
                  <div className={styles.companyName}>
                    <MapPin className={styles.locationIcon} />
                    招商银行·招银网络科技
                  </div>
                  <div className={styles.workPeriod}>
                    <Calendar className={styles.calendarIcon} />
                    2021年7月 - 2023年7月
                  </div>
                </div>
                <div className={styles.companyLogo}>
                  <img src={zhaoyinLogo} alt="招商银行" />
                </div>
              </div>

              <Divider className={styles.cardDivider} />

              <div className={styles.roleDescription}>
                <Title level={4} className={styles.roleTitle}>
                  主要职责
                </Title>
                <Paragraph className={styles.roleText}>
                  本人主要负责中间业务收入定价系统PC、移动端的前端重构工作，参与后端日常开发工作。
                  同时担任产品设计师，负责产品管理系统项目管理。
                </Paragraph>
              </div>

              <div className={styles.honorsSection}>
                <Title level={4} className={styles.honorsTitle}>
                  荣誉成就
                </Title>
                <div className={styles.honorsTags}>
                  <Tag color="green" className={styles.tagItem}>
                    优秀新员工
                  </Tag>
                  <Tag color="blue" className={styles.tagItem}>
                    前端编程比赛第一名
                  </Tag>
                  <Tag color="purple" className={styles.tagItem}>
                    管理信息开发团队创新大赛多个一等奖
                  </Tag>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 教育经历 */}
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.timelineMarker}>
              <Star className={styles.markerIcon} />
            </div>

            <Card className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <Title level={3} className={styles.jobTitle}>
                    计算机科学与技术
                  </Title>
                  <div className={styles.companyName}>
                    <MapPin className={styles.locationIcon} />
                    成都理工大学（双一流大学）
                  </div>
                  <div className={styles.workPeriod}>
                    <Calendar className={styles.calendarIcon} />
                    2017年9月 - 2021年6月
                  </div>
                </div>
                <div className={styles.companyLogo}>
                  <img src={chengduLogo} alt="成都理工大学" />
                </div>
              </div>

              <Divider className={styles.cardDivider} />

              <div className={styles.educationStats}>
                <Row gutter={[16, 16]} className={styles.statsRow}>
                  <Col span={12}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>3.5/5.0</div>
                      <div className={styles.statLabel}>GPA</div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>前10%</div>
                      <div className={styles.statLabel}>专业排名</div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className={styles.honorsSection}>
                <Title level={4} className={styles.honorsTitle}>
                  荣誉成就
                </Title>
                <div className={styles.honorsTags}>
                  <Tag color="gold" className={styles.tagItem}>
                    国家优秀奖学金
                  </Tag>
                  <Tag color="blue" className={styles.tagItem}>
                    校级优秀干部
                  </Tag>
                  <Tag color="green" className={styles.tagItem}>
                    校级优秀毕业生
                  </Tag>
                  <Tag color="purple" className={styles.tagItem}>
                    院级优秀学生
                  </Tag>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
