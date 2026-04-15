import { motion } from "motion/react";
import { Code2, Trophy, Users, Zap, ShieldCheck, Layers } from "lucide-react";

const workStats = [
  {
    icon: Code2,
    title: "开发经验",
    value: "4年+",
    desc: "前端开发经验，从技术开发进阶至技术负责人，具备系统架构设计与团队管理能力",
    color: "bg-blue-500"
  },
  {
    icon: Trophy,
    title: "项目经验",
    value: "4个",
    desc: "大型项目，以“技术+设计+产品”三重角色推动核心功能突破瓶颈",
    color: "bg-indigo-500"
  },
  {
    icon: Users,
    title: "团队管理",
    value: ">10%",
    desc: "率领前端团队人效提升，带教的校招生均能独立承担中高难度任务",
    color: "bg-purple-500"
  },
  {
    icon: Zap,
    title: "组件封装",
    value: "30+个",
    desc: "封装高可复用组件，做到组件高可复用性，提高开发效率",
    color: "bg-violet-500"
  },
  {
    icon: ShieldCheck,
    title: "系统故障率",
    value: "<0.5%",
    desc: "系统故障率控制在，确保业务系统的稳定性和可靠性",
    color: "bg-blue-600"
  },
  {
    icon: Layers,
    title: "综合能力",
    value: "全链路",
    desc: "具备能力，从架构设计到产品落地，致力于成为兼具专业深度与综合能力的技术负责人",
    color: "bg-indigo-600"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="h-full flex items-center relative px-6 bg-white overflow-hidden">
      {/* Background Decorative Dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-6 inline-block">
              工作成果
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-primary">
              突破能力边界，实现角色转型
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-[#F8FAFF] rounded-[2rem] border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{stat.title}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-indigo-600">{stat.value}</span>
              </div>
              <p className="text-sm text-secondary font-medium leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
