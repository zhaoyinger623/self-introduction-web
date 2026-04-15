import { motion } from "motion/react";

const skillGroups = [
  {
    title: "前端技术",
    skills: [
      { name: "React", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "TypeScript", level: 85 },
    ]
  },
  {
    title: "设计能力",
    skills: [
      { name: "UI/UX设计", level: 90 },
      { name: "动画设计", level: 95 },
      { name: "响应式设计", level: 88 },
    ]
  },
  {
    title: "工具 & 平台",
    skills: [
      { name: "Git", level: 92 },
      { name: "Webpack/Vite", level: 85 },
      { name: "Figma", level: 80 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="h-full flex items-center relative px-6 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-spring-green/[0.02] -skew-x-12 transform origin-top-right" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">技术栈 & 能力</h2>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <h3 className="text-2xl font-serif mb-8 italic text-spring-green flex items-center gap-4">
                <span className="w-6 h-px bg-spring-green/30" />
                {group.title}
              </h3>
              <div className="space-y-8">
                {group.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between text-xs font-bold mb-3 tracking-wider group-hover/skill:text-spring-green transition-colors">
                      <span>{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-[3px] w-full bg-cream overflow-hidden rounded-full relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full relative z-10 ${sIdx % 2 === 0 ? 'bg-spring-green' : 'bg-spring-pink'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
