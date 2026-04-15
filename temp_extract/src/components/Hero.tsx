import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-full flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Video Background - Clear, no overlay */}
      <div className="absolute inset-0 -z-10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Multiple Butterflies for more liveliness */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-butterfly absolute" style={{ animationDelay: `${i * 5}s`, top: `${i * 20}%` }}>
            <div className="butterfly-wings flex gap-[1px]">
              <div className={`w-3 h-5 ${i % 2 === 0 ? 'bg-spring-pink' : 'bg-spring-yellow'} rounded-full origin-right rotate-[-20deg]`} />
              <div className={`w-3 h-5 ${i % 2 === 0 ? 'bg-spring-pink' : 'bg-spring-yellow'} rounded-full origin-left rotate-[20deg]`} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[12px] uppercase tracking-[0.4em] text-white font-bold mb-8 block drop-shadow-md">
            ZOEY • PORTFOLIO 2026
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[1.1] tracking-tight mb-12 drop-shadow-sm text-primary">
            Project Manager <br />
            <span className="italic text-secondary">& Frontend development programmer</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold text-sm uppercase tracking-widest">
              Project Manager
            </div>
            <div className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold text-sm uppercase tracking-widest">
              Frontend development programmer
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-12 drop-shadow-md text-balance">
            Building platforms for brilliant minds, fearless makers, and thoughtful souls. 
            Through the noise, we craft digital havens for deep work and pure flows.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="group relative bg-white text-primary px-12 py-5 rounded-full text-lg font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                Begin Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-6"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white drop-shadow-md">Discovery Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
