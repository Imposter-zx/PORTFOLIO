import { motion } from 'framer-motion';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import Background from './Background';

const Hero = ({ isDark }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 relative overflow-hidden">
      <Background isDark={isDark} showAccent={true} lineOpacity={0.12} />

      <div className="max-w-5xl relative z-10">

        {/* Eyebrow label */}
=======
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight, Download, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6">
      <div className="max-w-4xl relative z-10">
>>>>>>> @{-1}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
<<<<<<< HEAD
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
=======
          <span className="px-4 py-1 flex w-fit rounded-full border border-blue-500/30 dark:border-[#00f2ff]/30 bg-blue-500/10 dark:bg-[#00f2ff]/5 text-blue-600 dark:text-[#00f2ff] text-xs font-mono mb-6 uppercase tracking-wider">
            {t('hero.badge')}
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight text-gray-900 dark:text-white">
            {t('hero.title_1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00f2ff] dark:to-[#00f2ff] drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">{t('hero.title_2')}</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-[#7000ff] dark:to-[#7000ff] drop-shadow-[0_0_15px_rgba(112,0,255,0.3)] italic">{t('hero.title_3')}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-[#a0a0a0] mb-12 h-16 md:h-8 font-light"
        >
          <Typewriter
            key={language} // Forces re-mount when language changes
            words={t('hero.typewriter')}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
>>>>>>> @{-1}
        </motion.div>

        {/* Index counter */}
        <motion.div
<<<<<<< HEAD
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
=======
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-6"
        >
          <button className="px-8 py-3 rounded-lg border-2 border-blue-500/50 text-blue-600 bg-blue-50 hover:bg-blue-100 dark:border-[#00f2ff] dark:text-[#00f2ff] dark:bg-transparent dark:hover:bg-[#00f2ff]/10 font-bold flex items-center group transition-all dark:shadow-[0_0_15px_rgba(0,242,255,0.2)]">
            {t('hero.btn_projects')}
            <ChevronRight className={`w-4 h-4 transition-transform ${language === 'ar' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} />
          </button>
          <button className="px-8 py-3 rounded-lg bg-white/50 border border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 font-semibold flex items-center backdrop-blur-md transition-all shadow-sm dark:shadow-none">
            {t('hero.btn_cv')}
            <Download className={`${language === 'ar' ? 'mr-2' : 'ml-2'} w-4 h-4`} />
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 dark:text-[#444]"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">{t('hero.scroll')}</span>
        <div className="w-1 h-3 bg-gray-300 dark:bg-[#333] rounded-full"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 10, 0]
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className={`hidden lg:block absolute ${language === 'ar' ? 'left-20' : 'right-20'} top-1/2 w-64 h-64 bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/40 dark:border-white/5 -z-10 shadow-xl dark:shadow-none bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-[#00f2ff]/5 dark:to-[#7000ff]/5`}
      >
        <div className="w-full h-full border border-dashed border-gray-300 dark:border-white/10 rounded-xl flex items-center justify-center">
          <MousePointer2 className="w-12 h-12 text-blue-400/50 dark:text-[#00f2ff]/30" />
        </div>
>>>>>>> @{-1}
      </motion.div>
    </section>
  );
};

export default Hero;
