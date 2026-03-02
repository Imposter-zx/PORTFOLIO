import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X, Terminal, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/70 dark:bg-[#0f0f0f]/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#00f2ff] to-[#7000ff] rounded-lg flex items-center justify-center">
            <Terminal className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter neon-text-blue">IAO design.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-gray-600 dark:text-[#a0a0a0] hover:text-[#00f2ff] dark:hover:text-[#00f2ff] transition-colors"
            >
              {link.name}
            </motion.a>
          ))}

          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200 dark:border-white/10 ml-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-gray-600 dark:text-[#a0a0a0] hover:text-gray-900 dark:hover:text-white transition-colors p-2"
                aria-label="Change Language"
              >
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{language}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden py-1"
                  >
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'fr', label: 'Français' },
                      { code: 'ar', label: 'العربية' }
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${language === lang.code ? 'text-[#00f2ff] bg-[#00f2ff]/5 font-medium' : 'text-gray-600 dark:text-[#a0a0a0] hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-[#a0a0a0] hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Github Link */}
            <motion.a
              href="https://github.com/Imposter-zx"
              target="_blank"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-9 h-9 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center rounded-full text-gray-700 dark:text-white hover:border-[#00f2ff] dark:hover:border-[#00f2ff] transition-all hover:shadow-[0_0_10px_rgba(0,242,255,0.2)]"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-[#a0a0a0]"
          >
            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button
            className="text-gray-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-[#a0a0a0] hover:text-[#00f2ff] dark:hover:text-[#00f2ff]"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 font-bold">Language</p>
                <div className="flex space-x-4">
                  {[
                    { code: 'en', label: 'ENG' },
                    { code: 'fr', label: 'FRA' },
                    { code: 'ar', label: 'عربي' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${language === lang.code ? 'bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/30' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-[#a0a0a0]'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
