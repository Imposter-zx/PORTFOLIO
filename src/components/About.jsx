import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

const About = () => {
  const traits = [
    {
      label: "Architecture",
      text: "Writing maintainable, scalable code is my priority. I love the challenge of systems that grow gracefully.",
    },
    {
      label: "Design",
      text: "Blending technical logic with aesthetic precision to create interfaces people actually feel.",
    },
    {
      label: "Velocity",
      text: "Fast learner. Passionate about staying ahead of the curve and shipping quality quickly.",
    },
    {
      label: "Systems",
      text: "Understanding how components interact across complex systems to build robust, lasting solutions.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-40 px-6 bg-[var(--bg-dark)]">
      <hr className="section-rule mb-40" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">

          {/* Left — Identity */}
          <motion.div
            className="lg:w-5/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="text-[var(--fs-xs)] font-mono uppercase tracking-[0.4em] text-[var(--red-accent)] mb-6 block"
            >
              02 — About
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-[var(--fs-4xl)] font-black leading-[0.9] tracking-tighter uppercase mb-10"
            >
              Expressive<br />
              <span className="text-[var(--red-accent)]">Logic.</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-[var(--text-dim)] text-[var(--fs-base)] leading-relaxed font-light">
              <p>
                I'm <span className="text-[var(--text-main)] font-semibold">Ilyas Ait Oulhiane</span> — a computer science student at IFIAG who found that code is more than instructions.
                It's a medium for creation.
              </p>
              <p>
                I don't just build websites. I craft digital environments where technical precision
                meets emotional design — at the intersection of clean architecture and
                unforgettable interfaces.
              </p>
=======
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
>>>>>>> @{-1}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 pt-8 border-t border-white/5">
              <p className="text-[var(--fs-xs)] uppercase tracking-widest font-bold text-[var(--red-accent)] mb-3">Current Goal</p>
              <p className="text-[var(--text-dim)] font-light italic text-[var(--fs-base)] leading-relaxed">
                Seeking an internship where creative drive meets professional impact.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Traits */}
          <motion.div
            className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-8 border-t border-l border-white/5 hover:bg-white/[0.025] transition-colors duration-500"
              >
                <p className="text-[var(--fs-xs)] uppercase tracking-[0.3em] font-bold text-[var(--red-accent)] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {trait.label}
                </p>
                <p className="text-[var(--text-dim)] text-[var(--fs-sm)] font-light leading-relaxed">
                  {trait.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
