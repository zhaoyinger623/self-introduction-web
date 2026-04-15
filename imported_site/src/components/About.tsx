import { motion } from "motion/react";

const stats = [
  {
    label: "开发经验",
    value: "4年+",
    desc: "从技术开发进阶至技术负责人，具备系统架构设计与团队管理能力",
  },
  {
    label: "项目经验",
    value: "4个",
    desc: "主导过7个大型项目，以“技术+设计+产品”三重角色推动核心功能突破瓶颈",
  },
  {
    label: "团队管理",
    value: ">10%",
    desc: "率领前端团队人效提升，带教的校招生均能独立承担中高难度任务",
  },
  { label: "组件封装", value: "30+", desc: "封装高可复用组件，提高开发效率" },
  { label: "系统故障率", value: "<0.5%", desc: "确保业务系统的稳定性和可靠性" },
  {
    label: "综合能力",
    value: "全链路",
    desc: "从架构设计到产品落地，致力于成为兼具专业深度与综合能力的技术负责人",
  },
];

const skills = [
  "前端架构设计",
  "UI/UX设计",
  "产品需求分析",
  "团队管理",
  "跨部门协作",
  "技术培训",
  "性能优化",
  "组件封装",
];

export default function About() {
  return (
    <section
      id="about"
      className="h-full flex items-center px-6 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
          {/* Block 1: The Precision of Structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm flex flex-col justify-center"
          >
            <div className="w-8 h-8 text-spring-green mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-full h-full"
              >
                <path
                  d="M12 3L4 21H20L12 3Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">
              突破能力边界，实现角色转型
            </h2>
            <div className="space-y-4 text-base md:text-lg text-secondary font-medium leading-relaxed max-w-2xl">
              <p>
                在各项目中，以{" "}
                <span className="text-primary font-bold">
                  "技术 + 设计 + 产品"
                </span>{" "}
                三重角色推动核心功能突破瓶颈，验证了从{" "}
                <span className="text-primary font-bold">"技术执行者"</span> 到{" "}
                <span className="text-primary font-bold">"业务赋能者"</span>{" "}
                的转型能力。
              </p>
              <p>
                擅长跨部门协作与团队管理，秉持{" "}
                <span className="text-primary font-bold">
                  "求实进取、主动担责"
                </span>{" "}
                的理念，持续深耕前端技术与业务结合。
              </p>
            </div>
          </motion.div>

          {/* Block 2: Nature Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-deep-forest p-8 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-8 h-8 text-spring-pink mb-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full opacity-80"
                >
                  <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
                </svg>
              </div>
              <p className="text-2xl font-serif italic leading-tight mb-6">
                "求实进取、主动担责"
              </p>
              <p className="text-xs text-white/60 font-medium leading-relaxed">
                致力于成为兼具专业深度与综合能力的前端技术负责人。深耕技术与业务的完美结合。
              </p>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-spring-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Block 3: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-[#E0F2F7] p-8 rounded-[2.5rem] flex flex-col justify-center gap-8"
          >
            <div>
              <div className="text-5xl font-serif text-primary mb-1 italic">
                4年+
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60">
                前端开发经验
              </div>
            </div>
            <div>
              <div className="text-5xl font-serif text-primary mb-1 italic">
                4个
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60">
                大型项目主导
              </div>
            </div>
          </motion.div>

          {/* Block 4: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden aspect-[21/9] md:aspect-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
              alt="Minimalist Workspace"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-6 left-6 text-white font-serif italic text-base drop-shadow-md">
              The workspace where logic meets light.
            </div>
          </motion.div>
        </div>

        {/* The Creative Pivot Section - Compact */}
        <div className="pt-8 border-t border-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-base text-secondary font-medium leading-relaxed"
            >
              <h3 className="text-2xl font-serif italic text-primary mb-4">
                核心价值与愿景
              </h3>
              <p>
                从纯粹的技术开发转向多维度的技术管理与产品设计，这并非背离，而是一次深度的扩张。
                我将架构设计的严谨逻辑应用于产品体验、团队协作以及业务赋能。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl font-serif italic text-spring-green leading-tight">
                我在技术与业务之间架起桥梁，让复杂的逻辑转化为直观的价值。
              </p>
              <p className="text-sm text-secondary font-medium leading-relaxed">
                今天，我的工作以“业务赋能”为核心——这是一种优先考虑系统稳定性、研发效能与产品体验的方法论。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
