import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "晋升系统",
    category: "System Architecture",
    image: "https://picsum.photos/seed/promotion/800/1000",
    desc: "在晋升系统从0到1的全链路建设中，以“技术攻坚 + 跨角色补位 + 质量交付”三重能力突破项目难点。技术层面主导前端架构设计，封装12个高复用组件；角色补位上主动承担产品与UI设计工作。",
    tags: ["React", "TypeScript", "RsBuild", "Ant Design", "ZuStand"],
    link: "#"
  },
  {
    title: "异动系统",
    category: "Mobile Development",
    image: "https://picsum.photos/seed/change/800/1000",
    desc: "在技术团队、产品经理、业务方均发生人员更换的艰难处境下，一个月内梳理已有逻辑，落地移动端系统开发，协同业务方进行功能验收，将停滞一年未成功的异动系统投入上线并使用。",
    tags: ["React", "TypeScript", "RsBuild", "Zustand"],
    link: "#"
  },
  {
    title: "版本管理系统",
    category: "Product Management",
    image: "https://picsum.photos/seed/version/800/1000",
    desc: "设计并实现了多端适配的版本管理系统，支持Web、移动端等多种平台。方便用户、业务管理员、未来的技术开发人员查询工作台的历史版本记录。",
    tags: ["React", "RsBuild", "多端适配"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="h-full flex items-center relative px-6 bg-cream overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-spring-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-indigo-600 font-bold mb-4 block">Project Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              主导核心项目，<br />
              <span className="italic text-indigo-600/80">驱动业务增长</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-spring-mint transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-widest text-primary shadow-sm">
                  {project.category}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
              <p className="text-xs text-secondary font-medium leading-relaxed mb-4 line-clamp-2">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[8px] px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-md font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
