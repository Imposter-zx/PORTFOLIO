import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.categories.programming'),
      skills: ["Python", "JavaScript", "PHP", "C", "C#", "Java"],
      color: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20",
      borderColor: "border-blue-500/20 dark:border-blue-500/30"
    },
    {
      title: t('skills.categories.web'),
      skills: ["HTML5", "CSS3", "Laravel", "React", "Next.js", "Vite"],
      color: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20",
      borderColor: "border-purple-500/20 dark:border-purple-500/30"
    },
    {
      title: t('skills.categories.design'),
      skills: ["UI/UX", "Figma", "Blender (3D)", "Photoshop", "Adobe XD"],
      color: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20",
      borderColor: "border-emerald-500/20 dark:border-emerald-500/30"
    },
    {
      title: t('skills.categories.tools'),
      skills: ["Git", "GitHub", "Linux", "Docker", "VS Code", "Terminal"],
      color: "from-orange-500/10 to-yellow-500/10 dark:from-orange-500/20 dark:to-yellow-500/20",
      borderColor: "border-orange-500/20 dark:border-orange-500/30"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {t('skills.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00f2ff] dark:to-[#00f2ff] drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">{t('skills.title_2')}</span>
        </h2>
        <p className="text-gray-600 dark:text-[#a0a0a0] max-w-xl mx-auto">
          {t('skills.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-white/60 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border ${cat.borderColor} bg-gradient-to-br ${cat.color} hover:scale-[1.02] transition-all shadow-sm dark:shadow-none`}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
              <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white mr-3 shadow-md dark:shadow-[0_0_10px_white]"></div>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-medium text-gray-700 dark:text-white/80 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience / Learning Brief */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 bg-white/70 dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-dashed border-gray-300 dark:border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm dark:shadow-none"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {t('skills.journey.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-[#7000ff] dark:to-[#7000ff] drop-shadow-[0_0_15px_rgba(112,0,255,0.3)]">{t('skills.journey.title_2')}</span>
          </h3>
          <p className="text-gray-600 dark:text-[#a0a0a0]">
            {t('skills.journey.desc')}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <div className="text-3xl font-black text-blue-600 dark:text-[#00f2ff]">2+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-[#666]">{t('skills.journey.years')}</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <div className="text-3xl font-black text-purple-600 dark:text-[#7000ff]">15+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-[#666]">{t('skills.journey.projects')}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
