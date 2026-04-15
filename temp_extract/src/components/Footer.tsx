export default function Footer() {
  return (
    <footer className="py-32 px-6 bg-cream border-t border-spring-green/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex gap-12 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          <a href="#" className="hover:text-spring-green transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-spring-green transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-spring-green transition-colors">
            Dribbble
          </a>
        </div>

        <div className="text-[10px] text-secondary font-bold uppercase tracking-[0.3em]">
          © 2026 Zhao Yingyue. Crafted with Art & Code.
        </div>
      </div>
    </footer>
  );
}
