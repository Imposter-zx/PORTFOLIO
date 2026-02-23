import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="neon-text-blue">Connect.</span></h2>
                <p className="text-[#a0a0a0] text-lg mb-12">
                    I'm currently looking for an internship and am open to discussing new opportunities or creative collaborations. 
                    Feel free to reach out!
                </p>

                <div className="space-y-6">
                    <div className="flex items-center space-x-4 group p-4 glass rounded-2xl hover:border-[#00f2ff]/50 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-[#00f2ff]/10 rounded-xl flex items-center justify-center text-[#00f2ff]">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest text-[#666]">Email</div>
                            <div className="font-medium">contact@ilyas.design</div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 glass rounded-2xl border-white/5">
                        <div className="w-12 h-12 bg-[#7000ff]/10 rounded-xl flex items-center justify-center text-[#7000ff]">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest text-[#666]">Availability</div>
                            <div className="font-medium text-[#00ff9d]">Open for Internships 2026</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex space-x-6">
                    <a href="https://github.com/Imposter-zx" target="_blank" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-[#00f2ff]/10 hover:border-[#00f2ff] transition-all">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-[#7000ff]/10 hover:border-[#7000ff] transition-all">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>
        </div>

        <div className="lg:w-1/2">
            <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-3xl border-white/5 space-y-6"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#666] ml-2 font-bold">Your Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00f2ff] transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#666] ml-2 font-bold">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00f2ff] transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#666] ml-2 font-bold">Subject</label>
                    <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00f2ff] transition-all"
                        placeholder="Internship Opportunity"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#666] ml-2 font-bold">Message</label>
                    <textarea 
                        rows="5"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00f2ff] transition-all resize-none"
                        placeholder="Hey Ilyas, I'd like to talk about..."
                    ></textarea>
                </div>

                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f2ff] to-[#7000ff] text-white font-bold flex items-center justify-center space-x-2 group hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all">
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
