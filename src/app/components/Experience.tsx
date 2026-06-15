import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { SectionHeading } from './About';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const exps = [
    {
      role: 'Python Web Development Intern',
      company: 'ICT Academy of Kerala',
      location: 'Kerala, India',
      period: '2024',
      achievements: ['Flask development & REST API creation', 'Backend optimization & database design', 'Production deployment practices'],
      tech: ['Python', 'Flask', 'REST API', 'MySQL'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Kevnit Digital Solutions',
      location: 'Kerala, India',
      period: '2023',
      achievements: ['WordPress development & theme customization', 'Plugin integration & optimization', 'Client project delivery'],
      tech: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <SectionHeading label="Experience" title="Where I've worked." subtitle="Real-world industry experience and internships." />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: 'var(--border)' }} />

          <div className="space-y-6">
            {exps.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-14"
              >
                {/* Dot */}
                <div className="absolute left-[14px] top-6 w-3 h-3 rounded-full border-2" style={{ borderColor: 'var(--accent)', background: 'var(--bg)' }} />

                <div className="bento-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--accent)' }}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
                      <span className="flex items-center gap-1"><Calendar size={10} />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={10} />{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-[12px]" style={{ color: 'var(--text-secondary)' }}>
                        <ChevronRight size={12} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />{a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-medium" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
