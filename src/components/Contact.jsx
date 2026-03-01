import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="contact" className="py-40 px-6 bg-[var(--bg-dark)]">
      <hr className="section-rule" />
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="pt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="text-[var(--fs-xs)] font-mono uppercase tracking-[0.4em] text-[var(--red-accent)] mb-6 block"
          >
            05 — Contact
          </motion.span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16 mb-24">
            <motion.h2
              variants={itemVariants}
              className="text-[var(--fs-4xl)] font-black leading-[0.9] tracking-tighter uppercase"
            >
              Let's build<br />
              <span className="text-[var(--red-accent)]">something.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[var(--text-dim)] text-[var(--fs-base)] font-light max-w-sm leading-relaxed lg:text-right"
            >
              Currently opening my calendar for internships and collaborative work.
              If you have a vision, I have the intent to execute it.
            </motion.p>
          </div>

          {/* Contact links */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-0 border-t border-white/5">
            <a
              href="mailto:aitoulhianeilyass@gmail.com"
              className="group flex-1 flex items-center justify-between py-8 pr-8 border-b sm:border-b-0 sm:border-r border-white/5 hover:bg-white/[0.025] transition-colors duration-300 px-6 -mx-6 sm:mx-0 sm:px-0"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--text-dim)] mb-2 group-hover:text-[var(--red-accent)] transition-colors">Direct Mail</p>
                <p className="text-[var(--fs-lg)] font-semibold text-[var(--text-main)]">aitoulhianeilyass@gmail.com</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-[var(--text-dim)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--red-accent)] transition-all duration-300" />
            </a>

            <a
              href="https://github.com/Imposter-zx"
              target="_blank"
              className="group flex-1 flex items-center justify-between py-8 hover:bg-white/[0.025] transition-colors duration-300 sm:pl-12 px-6 -mx-6 sm:mx-0 sm:px-0 sm:pl-12"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--text-dim)] mb-2 group-hover:text-[var(--red-accent)] transition-colors">GitHub</p>
                <p className="text-[var(--fs-lg)] font-semibold text-[var(--text-main)]">@Imposter-zx</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-[var(--text-dim)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--red-accent)] transition-all duration-300" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <a href="mailto:aitoulhianeilyass@gmail.com" className="btn-outline">
              Start a Conversation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
