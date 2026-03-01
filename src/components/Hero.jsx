import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Background from './Background';

const Hero = ({ isDark }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 relative overflow-hidden">
      <Background isDark={isDark} showAccent={true} lineOpacity={0.12} />

      <div className="max-w-5xl relative z-10">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-[var(--fs-xs)] font-mono uppercase tracking-[0.45em] text-white/50">
            Creative Developer — Ilyas Ait Oulhiane
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[var(--fs-huge)] font-black leading-[0.88] tracking-tighter uppercase mb-10 text-white"
        >
          I build<br />
          <span className="text-white/30 font-light italic normal-case">things that</span><br />
          move.
        </motion.h1>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[var(--fs-base)] text-white/50 font-light leading-relaxed max-w-md mb-12"
        >
          Code as a creative medium. Interfaces built for impact.
          Detail-obsessed, system-minded.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-6 items-center"
        >
          <a href="#projects" className="btn-primary group flex items-center gap-3">
            Selected Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="text-[var(--fs-xs)] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
          >
            Let's Connect
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </motion.div>

        {/* Index counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-0 right-0 text-right hidden lg:block"
        >
          <span className="text-[120px] font-black leading-none text-white/[0.04] select-none">
            01
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-6 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-white/20 origin-top"
        />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
