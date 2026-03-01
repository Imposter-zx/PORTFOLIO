import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';

const Skills = ({ isDark }) => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "PHP", "C", "C#", "Java"],
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "Laravel", "React", "Next.js", "Vite"],
    },
    {
      title: "Design",
      skills: ["UI/UX", "Figma", "Blender 3D", "Photoshop", "Adobe XD"],
    },
    {
      title: "Tools & OS",
      skills: ["Git", "GitHub", "Linux", "Docker", "VS Code", "Terminal"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="skills" className="py-40 px-6 relative overflow-hidden">
      <Background isDark={isDark} showAccent={true} lineOpacity={0.1} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="text-[var(--fs-xs)] font-mono uppercase tracking-[0.4em] text-white/40 mb-6 block"
          >
            03 — Stack
          </motion.span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              variants={itemVariants}
              className="text-[var(--fs-4xl)] font-black leading-[0.9] tracking-tighter uppercase text-white"
            >
              Technical<br />
              <span className="text-white/30 font-light italic normal-case">expertise.</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/40 text-[var(--fs-base)] font-light max-w-xs lg:text-right leading-relaxed"
            >
              The tools I use to turn logic into art.
            </motion.p>
          </div>
        </motion.div>

        {/* Skill Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillCategories.map((group, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group bg-[#f40c3f] p-10 hover:bg-[#d40035] transition-colors duration-500"
            >
              <h3 className="text-[var(--fs-xs)] uppercase font-bold tracking-[0.3em] mb-8 text-white/50 group-hover:text-white transition-colors duration-300">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[var(--fs-sm)] font-medium text-white/80 group-hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
