import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Cpu } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code className="w-8 h-8 text-[#00f2ff]" />,
      title: "Clean Code",
      text: "Writing maintainable, scalable and efficient code is my priority. I love architectural challenges."
    },
    {
      icon: <Palette className="w-8 h-8 text-[#7000ff]" />,
      title: "UI/UX Mastery",
      text: "Blending technical logic with aesthetic design to create intuitive user journeys."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#ff00e6]" />,
      title: "Fast Learner",
      text: "Passionate about exploring new technologies and staying ahead of industry trends."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#00ff9d]" />,
      title: "Systems Thinker",
      text: "Understanding how components interact within complex systems to build robust solutions."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none tracking-tighter">
                Expressive<br />
                <span className="text-[var(--accent)]">Logic.</span>
              </h2>
              <div className="space-y-8 text-[var(--text-dim)] text-xl leading-relaxed font-light">
                <p>
                  I'm <span className="text-[var(--text-main)] font-semibold">Ilyas Ait Oulhiane</span>. 
                  A computer science student at IFIAG who found that code is more than just instructions — it's a medium for creation.
                </p>
                <p>
                  I don't just "build websites." I craft digital environments where technical precision 
                  meets emotional design. My focus is on the intersection of clean architecture and 
                  unforgettable interfaces.
                </p>
                <div className="pt-8 border-t border-white/5">
                    <p className="text-sm uppercase tracking-widest font-bold text-[var(--accent)] mb-4">The Goal</p>
                    <p className="text-[var(--text-main)] italic">
                      Currently seeking an internship to merge my creative drive with professional challenges.
                    </p>
                </div>
              </div>
           </motion.div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
          {cards.map((card, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex items-start gap-6 p-8 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all"
            >
                <div className="mt-1 opacity-50 group-hover:opacity-100 transition-opacity">{card.icon}</div>
                <div>
                    <h3 className="text-lg font-bold mb-1 uppercase tracking-wider">{card.title}</h3>
                    <p className="text-[var(--text-dim)] text-sm font-light max-w-sm">{card.text}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
