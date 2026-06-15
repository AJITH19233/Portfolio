import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Github, Linkedin, MapPin, GraduationCap, Briefcase, ArrowDown, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profile from '../../assets/ajithprofile.png';
import resume from '../../assets/Resume.pdf';

function TypeWriter() {
  const words = ['Software Developer', 'Full Stack Developer', 'Cloud & DevOps Enthusiast'];
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const w = words[wordIdx];
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < w.length) setText(w.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), 2000);
      } else {
        if (text.length === 0) { setDeleting(false); setWordIdx((i) => (i + 1) % words.length); }
        else setText(text.slice(0, -1));
      }
    }, deleting ? 35 : 70);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIdx]);

  return (
    <span>
      {text}<span className="animate-pulse" style={{ color: 'var(--accent)' }}>|</span>
    </span>
  );
}

function BentoCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bento-card p-5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">

          {/* Main intro — spans 4 cols on lg */}
          <BentoCard className="col-span-2 sm:col-span-4 lg:col-span-4 lg:row-span-2 !p-8 md:!p-10 flex flex-col justify-center" delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 self-start"
              style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1] mb-4" style={{ color: 'var(--text-primary)' }}>
              Ajith Chandran G
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl font-medium mb-4 h-8 sm:h-10" style={{ color: 'var(--text-secondary)' }}>
              <TypeWriter />
            </div>

            <p className="text-sm md:text-base mb-8 max-w-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Building scalable applications, cloud-native infrastructure, and intelligent digital solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                <Sparkles size={14} /> View Projects
              </a>
              <a
                href={resume}
                download="Ajith_Chandran_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
              >
                <Download size={14} /> Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                <Mail size={14} /> Contact
              </a>
            </div>
          </BentoCard>

          {/* Profile image */}
          <BentoCard className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 !p-0 overflow-hidden" delay={0.2}>
            <div className="w-full h-full min-h-[240px] sm:min-h-[320px] relative">
              <ImageWithFallback src={profile} alt="Ajith Chandran G" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)' }} />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Ajith Chandran G</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Software Developer</p>
              </div>
            </div>
          </BentoCard>

          {/* Location */}
          <BentoCard className="col-span-1" delay={0.3}>
            <MapPin size={18} style={{ color: 'var(--accent)' }} className="mb-3" />
            <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Kochi, Kerala</p>
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>India</p>
          </BentoCard>

          {/* Education */}
          <BentoCard className="col-span-1" delay={0.35}>
            <GraduationCap size={18} style={{ color: 'var(--accent)' }} className="mb-3" />
            <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>MCA Graduate</p>
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>CGPA 8.6</p>
          </BentoCard>

          {/* Experience */}
          <BentoCard className="col-span-1" delay={0.4}>
            <Briefcase size={18} style={{ color: 'var(--accent)' }} className="mb-3" />
            <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>2 Internships</p>
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>Industry Exp</p>
          </BentoCard>

          {/* GitHub */}
          <BentoCard className="col-span-1 flex flex-col items-center justify-center text-center" delay={0.45}>
            <a href="https://github.com/AJITH19233" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
              <Github size={22} style={{ color: 'var(--text-primary)' }} />
              <span className="text-[10px] font-medium" style={{ color: 'var(--text-secondary)' }}>GitHub</span>
            </a>
          </BentoCard>

          {/* LinkedIn */}
          <BentoCard className="col-span-1 flex flex-col items-center justify-center text-center" delay={0.5}>
            <a href="https://www.linkedin.com/in/ajithchandran1923" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
              <Linkedin size={22} style={{ color: 'var(--accent)' }} />
              <span className="text-[10px] font-medium" style={{ color: 'var(--text-secondary)' }}>LinkedIn</span>
            </a>
          </BentoCard>

          {/* Full Stack badge */}
          <BentoCard className="col-span-2 sm:col-span-2 flex items-center gap-3" delay={0.55}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: 'var(--bg-secondary)' }}>⚡</div>
            <div>
              <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Full Stack Developer</p>
              <p className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>React · Django · Node.js · AWS</p>
            </div>
          </BentoCard>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-12"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} style={{ color: 'var(--text-tertiary)' }} />
        </motion.div>
      </div>
    </section>
  );
}
