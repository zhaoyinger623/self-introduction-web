export const skillsIntro = {
  eyebrow: "技术栈",
  title: "我会的技术与工具",
  lead:
    "以下与当前项目栈及喜马拉雅任职期间的交付实践一致：偏 React 技术栈、工程化与可协作文档，并覆盖多端与 AI 相关场景。",
};

export type SkillGroup = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    title: "前端核心",
    subtitle: "语言、框架与组件化",
    tags: [
      "React",
      "TypeScript",
      "JavaScript (ESNext)",
      "Less / CSS Modules",
      "语义化 HTML / 可访问性基础",
    ],
  },
  {
    id: "dx",
    title: "工程化与体验",
    subtitle: "构建、UI 与动效",
    tags: [
      "Rsbuild",
      "Ant Design",
      "Framer Motion",
      "React Router",
      "Lucide（图标）",
    ],
  },
  {
    id: "delivery",
    title: "交付与协作",
    subtitle: "质量、流程与文档",
    tags: [
      "Git / 分支协作",
      "Code Review",
      "Rspress 组件文档",
      "联调 · 走查 · 灰度与回滚",
    ],
  },
  {
    id: "domain",
    title: "业务与扩展",
    subtitle: "平台化、多端与 AI 场景",
    tags: [
      "低代码 / 可视化搭建",
      "PC + 移动端双端交付",
      "SSE 流式与过程可观测（多 Agent 协作）",
      "AI 辅助研发与提效实践",
    ],
  },
];
