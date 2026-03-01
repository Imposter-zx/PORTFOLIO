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
    </div>
  );
}

export default App;
