import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Menu, X, Terminal, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cursor-pointer group"
        >
          <span className="text-lg font-black tracking-tighter uppercase group-hover:text-[var(--accent)] transition-colors">
            Ilyas<span className="font-light opacity-50 block text-[10px] tracking-[0.4em] leading-none">Creative Dev</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[12px] uppercase tracking-[0.2em] font-bold text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-10 h-10 glass flex items-center justify-center rounded-full hover:border-[var(--neon-blue)] transition-all mr-2"
          >
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </motion.button>

          <motion.a
            href="https://github.com/Imposter-zx"
            target="_blank"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-10 h-10 glass flex items-center justify-center rounded-full hover:border-[var(--neon-blue)] transition-all"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-white/5 bg-black/90 p-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-tighter text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
