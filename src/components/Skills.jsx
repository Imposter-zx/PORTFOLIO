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
    <section id="skills" className="py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Core <span className="neon-text-blue">Tech Stack</span></h2>
        <p className="text-[var(--text-dim)] max-w-xl mx-auto">
          A collection of tools and technologies I use to bring ideas to digital life.
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
            className={`glass p-6 rounded-2xl border ${cat.borderColor} bg-gradient-to-br ${cat.color} hover:scale-[1.02] transition-all`}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-2 h-2 rounded-full bg-[var(--text-main)] mr-3 shadow-[0_0_10px_var(--text-main)]"></div>
                {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span 
                  key={j}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-[var(--text-main)]/80 hover:bg-white/10 transition-colors"
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
        className="mt-20 glass p-8 rounded-3xl border-dashed border-[var(--glass-border)] flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Learning <span className="text-[var(--neon-purple)]">Journey</span></h3>
            <p className="text-[var(--text-dim)]">
                Currently a student at IFIAG, I maintain a constant flow of learning through documentation, 
                open-source contributions, and personal projects. My focus is on mastering 
                full-stack development and creative motion design.
            </p>
        </div>
        <div className="flex gap-4">
            <div className="text-center px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-black text-[#00f2ff]">2+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#666]">Years Coding</div>
            </div>
            <div className="text-center px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-black text-[#7000ff]">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#666]">Projects</div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
