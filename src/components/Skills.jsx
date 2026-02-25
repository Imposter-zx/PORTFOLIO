import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "PHP", "C", "C#", "Java"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "Laravel", "React", "Next.js", "Vite"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Design",
      skills: ["UI/UX", "Figma", "Blender (3D)", "Photoshop", "Adobe XD"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      title: "Tools & OS",
      skills: ["Git", "GitHub", "Linux", "Docker", "VS Code", "Terminal"],
      color: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="mb-20">
        <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase text-right">
          Technical<br />
          <span className="text-[var(--accent)]">Stack.</span>
        </h2>
        <p className="text-[var(--text-dim)] text-xl font-light text-right">The tools I use to turn logic into art.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 border border-white/5 rounded-lg hover:border-[var(--accent)] transition-all duration-500 group"
          >
            <h3 className="text-xs uppercase font-bold tracking-[0.3em] mb-8 text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="text-sm font-light text-[var(--text-dim)] group-hover:text-[var(--text-main)] transition-colors border-b border-white/5 pb-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
