import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon, Command } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import resume from '../../assets/Resume.pdf';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className={`flex items-center gap-1 px-2 py-1.5 rounded-2xl transition-all duration-500 ${
          scrolled ? 'glass shadow-lg' : ''
        }`}
        style={{
          background: scrolled ? undefined : 'transparent',
          border: scrolled ? undefined : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a href="#home" className="px-3 py-1.5 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
          Ajith<span style={{ color: 'var(--text-tertiary)' }}>.</span>dev
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="px-3 py-1.5 text-[13px] font-medium rounded-xl transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'var(--border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {l.name}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-1 p-2 rounded-xl transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--border)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            aria-label="Toggle theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </motion.div>
          </button>

          {/* Cmd+K hint */}
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
            className="ml-0.5 px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 text-[11px] transition-colors"
            style={{ color: 'var(--text-tertiary)', background: 'var(--border)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
          >
            <Command size={11} />K
          </button>

          {/* Resume */}
          <a
            href={resume}
            download="Ajith_Chandran_Resume.pdf"
            className="ml-1.5 px-4 py-1.5 text-[13px] font-semibold rounded-xl transition-colors"
            style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
          >
            Resume
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1">
          <button onClick={toggleTheme} className="p-2 rounded-xl" style={{ color: 'var(--text-secondary)' }} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-xl" style={{ color: 'var(--text-secondary)' }} aria-label="Menu">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 p-2 rounded-2xl glass shadow-lg"
        >
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--border)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {l.name}
            </a>
          ))}
          <a
            href={resume}
            download="Ajith_Chandran_Resume.pdf"
            onClick={() => setMobileOpen(false)}
            className="block mt-1 px-4 py-2.5 text-sm font-semibold text-center rounded-xl"
            style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
