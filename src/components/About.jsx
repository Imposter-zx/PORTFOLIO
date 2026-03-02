import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Code className="w-8 h-8 text-blue-500 dark:text-[#00f2ff]" />,
      title: t('about.cards.code.title'),
      text: t('about.cards.code.text')
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500 dark:text-[#7000ff]" />,
      title: t('about.cards.ui.title'),
      text: t('about.cards.ui.text')
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-500 dark:text-[#ff00e6]" />,
      title: t('about.cards.learner.title'),
      text: t('about.cards.learner.text')
    },
    {
      icon: <Cpu className="w-8 h-8 text-emerald-500 dark:text-[#00ff9d]" />,
      title: t('about.cards.systems.title'),
      text: t('about.cards.systems.text')
    }
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-gray-200 dark:border-white/5">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              {t('about.title_1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00f2ff] dark:to-[#00f2ff] drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">{t('about.title_2')}</span>
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-[#a0a0a0] text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
              <p className="border-l-2 border-blue-500 dark:border-[#00f2ff] pl-6 font-medium text-gray-800 dark:text-white italic">
                {t('about.p3')}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-blue-400 dark:hover:border-[#00f2ff] transition-all duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-[#a0a0a0] text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
