import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[var(--fs-huge)] font-black mb-10 tracking-tighter uppercase leading-[0.8]">
            Let's<br />
            <span className="text-[var(--accent)]">Talk.</span>
          </h2>
          <p className="max-w-xl mx-auto text-[var(--fs-base)] text-[var(--text-dim)] font-light mb-16 leading-relaxed text-center">
            I'm currently opening my calendar for internships and collaborative experiments.
            If you have a vision, I have the intent to execute it.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20">
            <a href="mailto:aitoulhianeilyass@gmail.com" className="group">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--text-dim)] mb-2 group-hover:text-[var(--accent)] transition-colors">Direct Mail</p>
              <p className="text-xl font-bold border-b border-white/10 pb-2">aitoulhianeilyass@gmail.com</p>
            </a>
            <a href="https://github.com/Imposter-zx" target="_blank" className="group">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--text-dim)] mb-2 group-hover:text-[var(--accent)] transition-colors">Social Platform</p>
              <p className="text-xl font-bold border-b border-white/10 pb-2">@Imposter-zx</p>
            </a>
          </div>

          <a
            href="mailto:aitoulhianeilyass@gmail.com"
            className="neon-btn-blue inline-block group"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
