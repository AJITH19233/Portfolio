import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Calendar, Target, BookOpen, Award } from 'lucide-react';

function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14 md:mb-20">
      <motion.span
        className="inline-block text-xs font-medium tracking-[0.2em] uppercase mb-3"
        style={{ color: 'var(--accent)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.span>
      <motion.h2
        className="text-3xl md:text-5xl lg:text-[52px] font-bold tracking-[-0.03em] leading-[1.1]"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-base md:text-lg mt-4 max-w-xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export { SectionHeading };

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const journey = [
    { step: 'Higher Secondary', detail: 'Computer Science — 86%', icon: '📚' },
    { step: 'BCA Graduate', detail: 'Saintgits College — CGPA 7.91', icon: '🎓' },
    { step: 'MCA Graduate', detail: 'MACFAST — CGPA 8.6', icon: '🏆' },
    { step: 'Python Developer', detail: 'ICT Academy Intern', icon: '🐍' },
    { step: 'Full Stack Developer', detail: 'React · Django · Node.js', icon: '⚡' },
    { step: 'Cloud & DevOps', detail: 'AWS · Docker · K8s · CI/CD', icon: '☁️' },
  ];

  const cards = [
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'MCA — MACFAST, CGPA 8.6',
        'BCA — Saintgits College, CGPA 7.91',
        'HSC — Computer Science, 86%',
      ],
    },
    {
      icon: Award,
      title: 'Certifications',
      items: [
        'MERN Stack Certification',
        'Python Flask Web Dev',
        'Microsoft Azure Fundamentals',
        'DevOps Engineer Certification',
      ],
    },
    {
      icon: BookOpen,
      title: 'Interests',
      items: [
        'Cloud Architecture & IaC',
        'Full Stack Development',
        'AI & Machine Learning',
        'System Design',
      ],
    },
    {
      icon: Target,
      title: 'Career Goals',
      items: [
        'Build impactful SaaS products',
        'Architect scalable cloud systems',
        'Lead engineering teams',
        'Contribute to open source',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <SectionHeading
          label="About"
          title="My journey so far."
          subtitle="From CS fundamentals to building production cloud infrastructure."
        />

        {/* Journey timeline — horizontal bento */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {journey.map((j, i) => (
            <motion.div
              key={j.step}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              className="bento-card p-4 text-center"
            >
              <span className="text-2xl block mb-2">{j.icon}</span>
              <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>{j.step}</p>
              <p className="text-[10px] leading-tight" style={{ color: 'var(--text-tertiary)' }}>{j.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio + Cards Bento */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Bio card — spans 2 */}
          <motion.div
            className="sm:col-span-2 bento-card p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Professional Summary
            </h3>
            <p className="text-sm leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              Highly motivated MCA graduate with expertise in{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Full Stack Development</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Cloud Technologies</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>DevOps</strong>, Backend Systems, REST APIs, and Modern Web Applications.
              Specialized in React, Django, Flask, Node.js, AWS, Docker, Kubernetes, and CI/CD pipelines.
              Passionate about building scalable, production-grade software solutions.
            </p>
          </motion.div>

          {/* Info cards */}
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="bento-card p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.06 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-secondary)' }}>
                    <Icon size={14} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="text-[12px] leading-relaxed flex items-start gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                      <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
