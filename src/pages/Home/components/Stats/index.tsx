import { useId } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { transitionSilky, viewportSection } from "../../../../motion/config";

type StatItem = {
  value: string;
  label: string;
  desc: string;
  detail: ReactNode;
};

const stats: StatItem[] = [
  {
    value: "5年",
    label: "开发经验",
    desc: "前端开发经验",
    detail: (
      <>
        拥有 <span className="stats-detail-hit">5年+</span>{" "}
        前端实践，从需求澄清、技术方案到上线闭环；可承担系统架构拆解、代码评审与质量门禁，并在多团队协作中推动节奏对齐与风险前置。
      </>
    ),
  },
  {
    value: "7个",
    label: "大型项目",
    desc: "主导项目",
    detail: (
      <>
        主导或深度参与 <span className="stats-detail-hit">7个</span>{" "}
        中大型项目交付，覆盖需求评审、里程碑拆解、变更治理与复盘；在人员与优先级波动时仍坚持可测、可回滚与可观测的上线标准。
      </>
    ),
  },
  {
    value: ">10%",
    label: "团队管理",
    desc: "人效提升",
    detail: (
      <>
        通过流程梳理、脚手架与规范沉淀，推动前端团队人效提升{" "}
        <span className="stats-detail-hit">&gt;10%</span>
        ；带教校招生独立承担中高难度需求，重视代码习惯与知识传承，让交付速度与质量可复用。
      </>
    ),
  },
  {
    value: "30+",
    label: "组件封装",
    desc: "高可复用组件",
    detail: (
      <>
        沉淀 <span className="stats-detail-hit">30+</span>{" "}
        业务组件与工程化能力（主题、表单、列表、权限等），统一交互与设计语言；新需求接入与联调成本显著下降，复用率与可读性双升。
      </>
    ),
  },
  {
    value: "<0.5%",
    label: "故障率",
    desc: "系统稳定性",
    detail: (
      <>
        监控告警、灰度发布与回滚预案常态化，将线上故障率控制在{" "}
        <span className="stats-detail-hit">&lt;0.5%</span>
        ；优先保障核心业务链路稳定，减少用户侧感知与业务损失。
      </>
    ),
  },
  {
    value: "全链路",
    label: "综合能力",
    desc: "需求—设计—研发协同",
    detail: (
      <>
        具备 <span className="stats-detail-hit">全链路</span>{" "}
        视野：从信息架构、性能与可访问性策略，到交互细节与埋点验收；以产品结果为导向，串联设计—前端—接口协作，推动方案真正落地。
      </>
    ),
  },
];

function StatFlipCard({ stat }: { stat: StatItem }) {
  return (
    <div className="stats-flip-wrap">
      <div
        className="stats-flip-root"
        tabIndex={0}
        role="group"
        aria-label={`${stat.label} ${stat.value}，悬停或聚焦查看详细说明`}
      >
        <div className="stats-flip-inner">
          <div className="stats-flip-face stats-flip-front">
            <div className="stats-value">{stat.value}</div>
            <div className="stats-caption-primary">{stat.label}</div>
            <div className="stats-caption-secondary">{stat.desc}</div>
          </div>
          <div className="stats-flip-face stats-flip-back">
            <p className="stats-detail-body">{stat.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Stats: React.FC = () => {
  const uid = useId().replace(/:/g, "");

  return (
    <section className="stats-overlap-wrap" aria-label="关键数据">
      <motion.div
        className="stats-bar-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSection}
        transition={{ ...transitionSilky, duration: 0.85 }}
      >
        <div className="stats-scroll-notch" aria-hidden>
          {/* meet + 容器 aspect-ratio 与 viewBox 一致，避免 none 非等比拉伸导致弧变斜、字左右高低不一 */}
          <svg
            className="stats-scroll-notch-shape"
            viewBox="0 -32 168 114"
            preserveAspectRatio="xMidYMid meet"
            overflow="visible"
            aria-hidden
          >
            <defs>
              <linearGradient
                id={`notch-fill-${uid}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              {/* 两段 90° 拼成上半圆，与 R=84 外弧同心对称；R=58 字更靠内 */}
              <path
                id={`notch-arc-${uid}`}
                d="M 26 58 A 58 58 0 0 1 84 0 A 58 58 0 0 1 142 58"
                fill="none"
              />
              <clipPath id={`notch-text-clip-${uid}`}>
                <path d="M 0 82 L 0 58 A 84 84 0 0 1 84 -26 A 84 84 0 0 1 168 58 L 168 82 Z" />
              </clipPath>
            </defs>
            <path
              fill={`url(#notch-fill-${uid})`}
              d="M 0 82 L 0 58 A 84 84 0 0 1 84 -26 A 84 84 0 0 1 168 58 L 168 82 Z"
            />
            <g clipPath={`url(#notch-text-clip-${uid})`}>
              <text
                fill="#94a3b8"
                fontSize="12"
                fontWeight="600"
                letterSpacing="0.06em"
                style={{
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  textTransform: "lowercase",
                }}
              >
                <textPath
                  href={`#notch-arc-${uid}`}
                  startOffset="50%"
                  textAnchor="middle"
                >
                  scroll to explore
                </textPath>
              </text>
            </g>
          </svg>

          <div className="stats-scroll-notch-content">
            <svg
              className="stats-scroll-notch-caret stats-notch-arrow"
              viewBox="0 0 20 16"
              aria-hidden
            >
              <path
                d="M10 2v9M4.5 8.5L10 14l5.5-5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="stats-grid-ref">
          {stats.map((stat) => (
            <StatFlipCard
              key={`${stat.label}-${stat.value}`}
              stat={stat}
            />
          ))}
        </div>

        <div className="stats-bar-rule" aria-hidden />
      </motion.div>
    </section>
  );
};

export default Stats;
