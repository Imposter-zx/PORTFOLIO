import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, AlertCircle } from 'lucide-react';

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
          'PORTFOLIO',
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
    </section>
  );
};

export default Projects;
