import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
=======
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t, language } = useLanguage();

    return (
        <section id="contact" className="py-24 px-6 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            {t('contact.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00f2ff] dark:to-[#00f2ff] drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">{t('contact.title_2')}</span>
                        </h2>
                        <p className="text-gray-600 dark:text-[#a0a0a0] text-lg mb-12">
                            {t('contact.desc')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group p-4 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-[#00f2ff]/50 transition-all cursor-pointer shadow-sm dark:shadow-none">
                                <div className={`w-12 h-12 bg-blue-500/10 dark:bg-[#00f2ff]/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-[#00f2ff] ${language === 'ar' ? 'ml-4' : ''}`}>
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-[#666]">{t('contact.email')}</div>
                                    <div className="font-medium text-gray-900 dark:text-white">contact@ilyas.design</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
                                <div className={`w-12 h-12 bg-purple-500/10 dark:bg-[#7000ff]/10 rounded-xl flex items-center justify-center text-purple-600 dark:text-[#7000ff] ${language === 'ar' ? 'ml-4' : ''}`}>
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-[#666]">{t('contact.availability')}</div>
                                    <div className="font-medium text-emerald-600 dark:text-[#00ff9d]">{t('contact.status')}</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex space-x-6">
                            <a href="https://github.com/Imposter-zx" target="_blank" className={`w-14 h-14 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-[#00f2ff]/10 hover:border-blue-400 dark:hover:border-[#00f2ff] hover:text-blue-600 transition-all shadow-sm ${language === 'ar' ? 'ml-6' : ''}`}>
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="w-14 h-14 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white hover:bg-purple-50 dark:hover:bg-[#7000ff]/10 hover:border-purple-400 dark:hover:border-[#7000ff] hover:text-purple-600 transition-all shadow-sm">
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
                        className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-gray-200 dark:border-white/10 space-y-6 shadow-sm dark:shadow-none"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className={`text-xs uppercase tracking-widest text-gray-500 dark:text-[#666] font-bold ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>{t('contact.form.name_label')}</label>
                                <input
                                    type="text"
                                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-400 dark:focus:border-[#00f2ff] transition-all shadow-sm"
                                    placeholder={t('contact.form.name_placeholder')}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={`text-xs uppercase tracking-widest text-gray-500 dark:text-[#666] font-bold ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>{t('contact.form.email_label')}</label>
                                <input
                                    type="email"
                                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-400 dark:focus:border-[#00f2ff] transition-all shadow-sm"
                                    placeholder={t('contact.form.email_placeholder')}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className={`text-xs uppercase tracking-widest text-gray-500 dark:text-[#666] font-bold ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>{t('contact.form.subject_label')}</label>
                            <input
                                type="text"
                                className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-400 dark:focus:border-[#00f2ff] transition-all shadow-sm"
                                placeholder={t('contact.form.subject_placeholder')}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className={`text-xs uppercase tracking-widest text-gray-500 dark:text-[#666] font-bold ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>{t('contact.form.msg_label')}</label>
                            <textarea
                                rows="5"
                                className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-400 dark:focus:border-[#00f2ff] transition-all resize-none shadow-sm"
                                placeholder={t('contact.form.msg_placeholder')}
                            ></textarea>
                        </div>

                        <button className={`w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 dark:from-[#00f2ff] dark:to-[#7000ff] text-white font-bold flex items-center justify-center group hover:shadow-[0_0_30px_rgba(0,100,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                            <span>{t('contact.form.btn_send')}</span>
                            <Send className={`w-4 h-4 transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
>>>>>>> @{-1}
};

export default Contact;
