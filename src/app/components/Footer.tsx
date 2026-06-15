import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
              Ajith<span style={{ color: 'var(--text-tertiary)' }}>.</span>dev
            </a>
            <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>Software Developer & Cloud Engineer</p>
          </div>
          <div className="flex gap-5">
            {['About', 'Skills', 'Projects', 'Contact'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >{l}</a>
            ))}
          </div>
          <div className="flex gap-2">
            {[
              { icon: Github, href: 'https://github.com/AJITH19233', l: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ajithchandran1923', l: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ajithchandran132@gmail.com', l: 'Email' },
            ].map((s) => (
              <a key={s.l} href={s.href} target={s.l !== 'Email' ? '_blank' : undefined} rel={s.l !== 'Email' ? 'noopener noreferrer' : undefined}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-tertiary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
                aria-label={s.l}
              ><s.icon size={14} /></a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-[11px] flex items-center justify-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
            © {y} Ajith Chandran G · Crafted with <Heart className="w-3 h-3 fill-red-400/50 text-red-400/50" /> in Kerala
          </p>
          
        </div>
      </div>
    </footer>
  );
}
