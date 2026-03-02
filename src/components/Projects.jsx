import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, Folder, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
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
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            {t('projects.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00f2ff] dark:to-[#00f2ff] drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">{t('projects.title_2')}</span>
          </h2>
          <p className="text-gray-600 dark:text-[#a0a0a0]">{t('projects.desc')}</p>
        </div>
        <a
          href="https://github.com/Imposter-zx"
          target="_blank"
          className="hidden md:flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-[#a0a0a0] hover:text-blue-600 dark:hover:text-[#00f2ff] transition-all"
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
          <a href="https://github.com/Imposter-zx" target="_blank" className="mt-6 px-6 py-2 rounded-lg border-2 border-blue-500/50 text-blue-600 bg-blue-50 hover:bg-blue-100 dark:border-[#00f2ff] dark:text-[#00f2ff] dark:bg-transparent dark:hover:bg-[#00f2ff]/10 font-bold transition-all">
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
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden group border border-gray-200 dark:border-white/10 flex flex-col shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:border-blue-400 dark:hover:border-[#00f2ff] transition-all duration-300"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 dark:bg-[#00f2ff]/10 rounded-xl flex items-center justify-center border border-blue-500/30 dark:border-[#00f2ff]/30 text-blue-600 dark:text-[#00f2ff]">
                      <Folder className="w-6 h-6" />
                    </div>
                    <div className="flex space-x-3">
                      <a href={repo.html_url} target="_blank" className="text-gray-500 dark:text-[#a0a0a0] hover:text-gray-900 dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                      {repo.homepage && <a href={repo.homepage} target="_blank" className="text-gray-500 dark:text-[#a0a0a0] hover:text-blue-600 dark:hover:text-[#00f2ff] transition-colors"><ExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#00f2ff] transition-colors">{repo.name}</h3>
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
    </section>
  );
};

export default Projects;
