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
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Turning Ideas into <br />
                <span className="neon-text-blue">Functional Art.</span>
              </h2>
              <div className="space-y-6 text-[#a0a0a0] text-lg leading-relaxed">
                <p>
                  As a Computer Science student at <span className="text-[#00f2ff]">IFIAG</span>, I specialize in bridging 
                  the gap between logical backend structures and visually stunning frontend experiences. 
                </p>
                <p>
                  My journey is driven by a <span className="italic">self-taught mindset</span> and an obsession 
                  with creative problem-solving. Whether it's crafting 3D assets in Blender or optimizing a React 
                  application, I aim for excellence in every pixel.
                </p>
                <p className="border-l-2 border-[#00f2ff] pl-6 font-medium text-white italic">
                  Currently seeking a 1-3 month internship to contribute my skills to a dynamic team.
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
                className="glass p-8 rounded-2xl glass-hover"
            >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
