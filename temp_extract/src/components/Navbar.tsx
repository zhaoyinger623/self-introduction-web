import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-cream/60 backdrop-blur-xl border-b border-spring-green/5">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-serif tracking-tighter text-primary"
        >
          赵莹玥®
        </motion.div>
        
        <div className="hidden md:flex items-center gap-12 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          <a href="#about" className="hover:text-spring-green transition-colors">关于</a>
          <a href="#experience" className="hover:text-spring-green transition-colors">经历</a>
          <a href="#portfolio" className="hover:text-spring-green transition-colors">作品</a>
          <a href="#skills" className="hover:text-spring-green transition-colors">技能</a>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-spring-green transition-all shadow-lg shadow-primary/10"
        >
          联系我
        </motion.button>
      </div>
    </nav>
  );
}
