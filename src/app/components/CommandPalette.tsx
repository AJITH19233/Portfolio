import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowRight, User, Code2, Briefcase, FolderOpen, Award, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const commands = [
  { id: 'about', label: 'Go to About', icon: User, section: '#about' },
  { id: 'skills', label: 'Go to Skills', icon: Code2, section: '#skills' },
  { id: 'experience', label: 'Go to Experience', icon: Briefcase, section: '#experience' },
  { id: 'projects', label: 'Go to Projects', icon: FolderOpen, section: '#projects' },
  { id: 'certs', label: 'Go to Certifications', icon: Award, section: '#certifications' },
  { id: 'contact', label: 'Go to Contact', icon: Mail, section: '#contact' },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery('');
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  const navigate = (section: string) => {
    setOpen(false);
    document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
        onClick={() => setOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0" style={{ background: 'var(--bg)', opacity: 0.6 }} />

        {/* Palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg mx-4 rounded-2xl overflow-hidden shadow-lg"
          style={{ background: 'var(--card-bg-solid)', border: '1px solid var(--border)' }}
        >
          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
            <Search size={16} style={{ color: 'var(--text-tertiary)' }} />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search or jump to..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: 'var(--text-primary)' }}
            />
            <kbd className="text-[10px] px-1.5 py-0.5 rounded font-mono" style={{ background: 'var(--bg-secondary)', color: 'var(--text-tertiary)' }}>ESC</kbd>
          </div>

          {/* Results */}
          <div className="max-h-64 overflow-y-auto p-2">
            {/* Theme toggle */}
            <button
              onClick={() => { toggleTheme(); setOpen(false); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:opacity-80 transition-opacity text-left"
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </button>

            {filtered.map((cmd) => (
              <button
                key={cmd.id}
                onClick={() => navigate(cmd.section)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-opacity text-left"
                style={{ color: 'var(--text-primary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <cmd.icon size={15} style={{ color: 'var(--text-secondary)' }} />
                <span className="flex-1">{cmd.label}</span>
                <ArrowRight size={12} style={{ color: 'var(--text-tertiary)' }} />
              </button>
            ))}
            {filtered.length === 0 && query && (
              <p className="px-3 py-4 text-center text-xs" style={{ color: 'var(--text-tertiary)' }}>No results found</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
