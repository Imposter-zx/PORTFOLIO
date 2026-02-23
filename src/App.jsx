import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

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
      <div className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen">
        <Background isDark={isDark} />
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-[var(--text-dim)] relative z-10">
        &copy; {new Date().getFullYear()} Ilyas Ait Oulhiane. Built with React & Framer Motion.
      </footer>
      </div>
    </div>
  );
}

export default App;
