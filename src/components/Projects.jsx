import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { ExternalLink, Github, AlertCircle } from 'lucide-react';
=======
import { ExternalLink, Github, Star, Folder, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
>>>>>>> @{-1}

const Projects = () => {
  const { t, language } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch('https://api.github.com/users/Imposter-zx/repos?per_page=100');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();

        const targetRepos = [
          'Car-Rental',
          'MediLink',
          'Java-Client-Server-Application',
          'AegisScan-OpenCore',
          'Dim',
          'PORTFOLIO',
        ];

        const filtered = data
          .filter(repo => targetRepos.includes(repo.name))
          .sort((a, b) => targetRepos.indexOf(a.name) - targetRepos.indexOf(b.name));

        setProjects(filtered);
=======
        const response = await fetch('https://api.github.com/users/Imposter-zx/repos?sort=updated&per_page=50');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();

        const excludedRepos = ['1337-Subject', 'Days-corection-1337'];
        const priorityRepos = ['AegisScan-OpenCore', 'Java-Client-Server-Application'];

        let filtered = data.filter(repo => !repo.fork && !excludedRepos.includes(repo.name));

        filtered.sort((a, b) => {
          const aPriority = priorityRepos.includes(a.name) ? 1 : 0;
          const bPriority = priorityRepos.includes(b.name) ? 1 : 0;
          if (aPriority !== bPriority) return bPriority - aPriority;
          return new Date(b.updated_at) - new Date(a.updated_at);
        });

        setProjects(filtered.slice(0, 6));
>>>>>>> @{-1}
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

<<<<<<< HEAD
  const projectDescriptions = {
    'Car-Rental': 'End-to-end vehicle booking ecosystem focused on seamless user flow and real-time availability.',
    'MediLink': 'Healthcare connectivity platform bridging patients and practitioners through secure data handling.',
    'AegisScan-OpenCore': 'High-performance scanning engine for OpenCore configurations, optimizing system stability and security.',
    'Dim': 'Minimalist design language exploration focused on light, shadow, and essentialism.',
    'PORTFOLIO': 'This portfolio — high-performance, built with React and Framer Motion, focused on editorial detail.',
    'Java-Client-Server-Application': 'Networked application demonstrating low-level socket programming and multithreaded architecture.',
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="projects" className="py-40 px-6 bg-[var(--bg-dark)]">
      <hr className="section-rule" />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="pt-24 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="text-[var(--fs-xs)] font-mono uppercase tracking-[0.4em] text-[var(--red-accent)] mb-6 block"
          >
            04 — Work
          </motion.span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              variants={itemVariants}
              className="text-[var(--fs-4xl)] font-black leading-[0.9] tracking-tighter uppercase"
            >
              Selected<br />
              <span className="text-[var(--red-accent)]">Projects.</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[var(--text-dim)] text-[var(--fs-base)] font-light max-w-xs lg:text-right leading-relaxed"
            >
              A curation defining my technical range.
            </motion.p>
          </div>
        </motion.div>

        {/* Project List */}
        {loading ? (
          <div className="space-y-px">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-32 bg-white/[0.02] animate-pulse rounded" />
            ))}
          </div>
        ) : error ? (
          <div className="glass p-16 rounded flex flex-col items-center justify-center text-center">
            <AlertCircle className="w-10 h-10 text-[var(--red-accent)] mb-5" />
            <h3 className="text-xl font-black uppercase mb-2">Sync Failed</h3>
            <p className="text-[var(--text-dim)] mb-8">GitHub API unreachable. Check my profile directly.</p>
            <a href="https://github.com/Imposter-zx" target="_blank" className="btn-outline">
              Go to GitHub
            </a>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <AnimatePresence>
              {projects.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  variants={itemVariants}
                  className="group relative flex flex-col sm:flex-row sm:items-start gap-8 py-12 border-b border-white/5 last:border-0 pl-0 hover:pl-5 transition-all duration-500"
                >
                  {/* Left-border accent on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--red-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                  {/* Index */}
                  <span className="text-[var(--fs-xs)] font-mono text-[var(--text-dim)] opacity-30 group-hover:opacity-100 group-hover:text-[var(--red-accent)] transition-all duration-300 pt-1 shrink-0 w-14">
                    {String(i + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(projects.length).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-[var(--fs-2xl)] font-black tracking-tighter uppercase group-hover:text-[var(--red-accent)] transition-colors duration-300">
                        {repo.name.replace(/-/g, ' ')}
                      </h3>
                      <div className="flex items-center gap-4 mt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                        <a href={repo.html_url} target="_blank" className="hover:text-[var(--text-main)] transition-colors text-[var(--text-dim)]">
                          <Github className="w-5 h-5" />
                        </a>
                        {repo.homepage && (
                          <a href={repo.homepage} target="_blank" className="hover:text-[var(--red-accent)] transition-colors text-[var(--text-dim)]">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-[var(--text-dim)] text-[var(--fs-base)] font-light leading-relaxed mb-5 max-w-2xl">
                      {projectDescriptions[repo.name] || repo.description || 'Building robust architecture through iterative experimentation.'}
                    </p>

                    <div className="flex flex-wrap items-center gap-5">
                      {repo.language && (
                        <span className="text-[var(--fs-xs)] uppercase font-bold tracking-[0.2em] text-[var(--red-accent)]">
                          {repo.language}
                        </span>
                      )}
                      {(repo.topics || []).slice(0, 3).map(topic => (
                        <span key={topic} className="text-[var(--fs-xs)] uppercase tracking-[0.2em] text-[var(--text-dim)] opacity-40">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
=======
  return (
    <section id="projects" className="py-24 px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            {t('projects.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-[#7000ff] dark:to-[#7000ff] drop-shadow-[0_0_15px_rgba(112,0,255,0.3)]">{t('projects.title_2')}</span>
          </h2>
          <p className="text-gray-600 dark:text-[#a0a0a0]">{t('projects.desc')}</p>
        </div>
        <a
          href="https://github.com/Imposter-zx"
          target="_blank"
          className="hidden md:flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-[#a0a0a0] hover:text-purple-600 dark:hover:text-[#7000ff] transition-all"
        >
          <span>{t('projects.view_all')}</span>
          <ExternalLink className={`w-4 h-4 ${language === 'ar' ? 'mr-1' : 'ml-1'}`} />
        </a>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 bg-gray-200 dark:bg-white/5 animate-pulse rounded-2xl"></div>
          ))}
        </div>
      ) : error ? (
        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-12 rounded-3xl flex flex-col items-center justify-center text-center border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('projects.error_title')}</h3>
          <p className="text-gray-600 dark:text-[#a0a0a0]">{t('projects.error_desc')}</p>
          <a href="https://github.com/Imposter-zx" target="_blank" className="mt-6 px-6 py-2 rounded-lg border-2 border-purple-500/50 text-purple-600 bg-purple-50 hover:bg-purple-100 dark:border-[#7000ff] dark:text-[#7000ff] dark:bg-transparent dark:hover:bg-[#7000ff]/10 font-bold transition-all">
            {t('projects.btn_github')}
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden group border border-gray-200 dark:border-white/10 flex flex-col shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(112,0,255,0.2)] hover:border-purple-400 dark:hover:border-[#7000ff] transition-all duration-300"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-purple-500/10 dark:bg-[#7000ff]/10 rounded-xl flex items-center justify-center border border-purple-500/30 dark:border-[#7000ff]/30 text-purple-600 dark:text-[#7000ff]">
                      <Folder className="w-6 h-6" />
                    </div>
                    <div className="flex space-x-3">
                      <a href={repo.html_url} target="_blank" className="text-gray-500 dark:text-[#a0a0a0] hover:text-gray-900 dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                      {repo.homepage && <a href={repo.homepage} target="_blank" className="text-gray-500 dark:text-[#a0a0a0] hover:text-purple-600 dark:hover:text-[#7000ff] transition-colors"><ExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-[#7000ff] transition-colors">{repo.name}</h3>
                  <p className="text-gray-600 dark:text-[#a0a0a0] text-sm mb-6 line-clamp-2">
                    {repo.description || t('projects.no_desc')}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {(repo.topics || []).slice(0, 3).map(topic => (
                      <span key={topic} className="text-[10px] uppercase font-bold text-gray-600 dark:text-[#666] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-transparent px-2 py-0.5 rounded">
                        {topic}
                      </span>
                    ))}
                    {repo.language && (
                      <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-[#00f2ff] bg-blue-500/10 dark:bg-[#00f2ff]/5 border border-blue-500/20 dark:border-[#00f2ff]/20 px-2 py-0.5 rounded">
                        {repo.language}
                      </span>
                    )}
                  </div>
                </div>

                <div className="px-8 py-4 bg-gray-50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex items-center text-xs text-gray-600 dark:text-[#666]">
                    <Star className={`w-3 h-3 ${language === 'ar' ? 'ml-1' : 'mr-1'} fill-yellow-500/50 text-yellow-500`} />
                    {repo.stargazers_count} {t('projects.stars')}
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-[#444] font-mono">
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
>>>>>>> @{-1}
    </section>
  );
};

export default Projects;
