import { motion } from "motion/react";
import { Palette, Cpu, Users, Smartphone } from "lucide-react";

const interests = [
  {
    title: "设计创作",
    icon: Palette,
    desc: "热爱UI/UX设计，喜欢探索新的设计趋势和创意灵感。擅长将设计理念转化为代码实现。",
  },
  {
    title: "技术探索",
    icon: Cpu,
    desc: "持续关注前端技术发展，喜欢尝试新技术，参与开源项目，与社区共同成长。",
  },
  {
    title: "团队协作",
    icon: Users,
    desc: "良好的沟通能力和团队合作精神，喜欢分享知识，帮助团队成员共同提升。",
  },
  {
    title: "移动优先",
    icon: Smartphone,
    desc: "专注于移动端用户体验，研究移动端设计模式和交互方式，追求极致的移动体验。",
  },
];

export default function Interests() {
  return (
    <section className="h-full flex items-center relative px-6 bg-spring-yellow/30 overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[40rem] h-[40rem] border border-spring-green/10 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold mb-4 block">Beyond Work</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">个人兴趣 & 特长</h2>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="p-10 bg-white rounded-[3rem] flex flex-col items-center text-center group-hover:bg-deep-forest group-hover:text-white transition-all duration-700 shadow-lg relative z-10">
                <div className="w-20 h-20 bg-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-spring-green group-hover:text-spring-pink transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-sm text-secondary font-medium leading-relaxed group-hover:text-white/70 transition-colors duration-500 text-balance">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
