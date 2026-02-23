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
        const response = await fetch('https://api.github.com/users/Imposter-zx/repos?sort=updated&per_page=6');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        setProjects(data.filter(repo => !repo.fork));
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
          <h2 className="text-4xl font-bold mb-2">My <span className="neon-text-purple">Projects</span></h2>
          <p className="text-[#a0a0a0]">Featured work and experiments from my GitHub.</p>
        </div>
        <a 
          href="https://github.com/Imposter-zx" 
          target="_blank"
          className="hidden md:flex items-center space-x-2 text-sm font-medium text-[#a0a0a0] hover:text-[#00f2ff] transition-all"
        >
          <span>View all repos</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
                <div key={i} className="h-64 glass animate-pulse rounded-2xl"></div>
            ))}
        </div>
      ) : error ? (
        <div className="glass p-12 rounded-3xl flex flex-col items-center justify-center text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Couldn't load projects</h3>
            <p className="text-[#a0a0a0]">But you can still check them out on GitHub!</p>
            <a href="https://github.com/Imposter-zx" target="_blank" className="mt-6 neon-btn-blue">Go to GitHub</a>
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
                className="glass rounded-2xl overflow-hidden group border-white/5 flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-[#7000ff]/10 rounded-xl flex items-center justify-center border border-[#7000ff]/30 text-[#7000ff]">
                        <Folder className="w-6 h-6" />
                    </div>
                    <div className="flex space-x-3">
                        <a href={repo.html_url} target="_blank" className="text-[#a0a0a0] hover:text-white"><Github className="w-5 h-5" /></a>
                        {repo.homepage && <a href={repo.homepage} target="_blank" className="text-[#a0a0a0] hover:text-[#00f2ff]"><ExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:neon-text-blue transition-all">{repo.name}</h3>
                  <p className="text-[#a0a0a0] text-sm mb-6 line-clamp-2">
                    {repo.description || "No description provided. Click to view repository on GitHub."}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {(repo.topics || []).slice(0, 3).map(topic => (
                      <span key={topic} className="text-[10px] uppercase font-bold text-[#666] border border-white/5 px-2 py-0.5 rounded">
                        {topic}
                      </span>
                    ))}
                    {repo.language && (
                      <span className="text-[10px] uppercase font-bold text-[#00f2ff] bg-[#00f2ff]/5 border border-[#00f2ff]/20 px-2 py-0.5 rounded">
                        {repo.language}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="px-8 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center text-xs text-[#666]">
                        <Star className="w-3 h-3 mr-1 fill-yellow-500/50 text-yellow-500" />
                        {repo.stargazers_count} stars
                    </div>
                    <div className="text-[10px] text-[#444] font-mono">
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
