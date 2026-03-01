import React from 'react';
import { motion } from 'framer-motion';

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
