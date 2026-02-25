import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, Folder, AlertCircle } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Imposter-zx/repos?per_page=100');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        
        const targetRepos = [
          'Car-Rental',
          'MediLink',
          'Java-Client-Server-Application',
          'AegisScan-OpenCore',
          'Dim',
          'PORTFOLIO'
        ];

        const filtered = data
          .filter(repo => targetRepos.includes(repo.name))
          .sort((a, b) => targetRepos.indexOf(a.name) - targetRepos.indexOf(b.name));

        setProjects(filtered);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
          Selected<br />
          <span className="text-[var(--accent)]">Work.</span>
        </h2>
        <p className="text-[var(--text-dim)] text-xl font-light">A curation of projects defining my technical range.</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map(i => (
                <div key={i} className="h-96 bg-white/[0.02] animate-pulse rounded-lg"></div>
            ))}
        </div>
      ) : error ? (
        <div className=" glass p-12 rounded-lg flex flex-col items-center justify-center text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-black uppercase mb-2 text-[var(--text-main)]">Sync Failed</h3>
            <p className="text-[var(--text-dim)]">GitHub API unreachable. Please check my profile manually.</p>
            <a href="https://github.com/Imposter-zx" target="_blank" className="mt-8 neon-btn-blue">Go to GitHub</a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatePresence>
            {projects.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative flex flex-col border-b border-white/5 pb-12 last:border-0"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-mono opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <div className="flex space-x-4">
                      <a href={repo.html_url} target="_blank" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors"><Github className="w-5 h-5" /></a>
                      {repo.homepage && <a href={repo.homepage} target="_blank" className="text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"><ExternalLink className="w-5 h-5" /></a>}
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase group-hover:text-[var(--accent)] transition-colors">
                  {repo.name.replace(/-/g, ' ')}
                </h3>
                
                <p className="text-[var(--text-dim)] text-lg font-light mb-8 max-w-xl leading-relaxed">
                  {repo.description || "Experimental development focusing on interaction and robust architecture."}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  {repo.language && (
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--accent)]">
                      {repo.language}
                    </span>
                  )}
                  {(repo.topics || []).slice(0, 3).map(topic => (
                    <span key={topic} className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--text-dim)] opacity-50">
                      {topic}
                    </span>
                  ))}
                </div>

                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent opacity-30 origin-left"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default Projects;
