import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="h-full flex items-center relative px-6 bg-cream">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-deep-forest rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-spring-green/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
              期待与您 <br />
              <span className="italic text-spring-mint">开启新的可能</span>
            </h2>
            
            <p className="text-lg text-white/60 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              让我们将严谨的技术逻辑与前瞻的设计美学相结合，创造出真正卓越的数字体验。
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-spring-mint text-deep-forest px-10 py-5 rounded-full text-base font-bold flex items-center gap-4 mx-auto shadow-2xl shadow-spring-mint/20 hover:bg-white transition-colors"
            >
              联系我
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Integrated Footer */}
        <div className="absolute bottom-12 left-0 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-primary/40">
          <div className="text-2xl font-serif tracking-tighter text-primary/60">赵莹玥®</div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-spring-green transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-spring-green transition-colors">GitHub</a>
          </div>
          <div className="text-[8px] font-bold uppercase tracking-[0.3em]">
            © 2026 Zhao Yingyue. Crafted with Art & Code.
          </div>
        </div>
      </div>
    </section>
  );
}
