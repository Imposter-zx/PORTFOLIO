import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setIsDark(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
<<<<<<< HEAD
    <div className={`relative min-h-screen transition-colors duration-500 ${isDark ? '' : 'light'}`}>
      <div className="text-[var(--text-main)] min-h-screen">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main className="w-full">
          <Hero isDark={isDark} />
          <About />
          <Skills isDark={isDark} />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 bg-[var(--bg-dark)]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[var(--text-dim)] text-xs font-bold uppercase tracking-[0.3em]">
              Ilyas Ait Oulhiane
            </span>
            <span className="text-[var(--text-dim)] text-xs opacity-40">
              &copy; {new Date().getFullYear()} — Built with React & Framer Motion
            </span>
            <a
              href="https://github.com/Imposter-zx"
              target="_blank"
              className="text-[var(--text-dim)] text-xs font-bold uppercase tracking-[0.3em] hover:text-[var(--red-accent)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
=======
    <div className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] text-gray-900 dark:text-[#e0e0e0] font-sans transition-colors duration-300">
      <Background />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-[#a0a0a0]">
        &copy; {new Date().getFullYear()} Ilyas Ait Oulhiane. Built with React & Framer Motion.
      </footer>
>>>>>>> @{-1}
    </div>
  );
}

export default App;
