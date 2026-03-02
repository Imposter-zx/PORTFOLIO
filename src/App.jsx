import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
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
    </div>
  );
}

export default App;
