import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight, Download, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6">
      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <motion.div
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
      </motion.div>
    </section>
  );
};

export default Hero;
