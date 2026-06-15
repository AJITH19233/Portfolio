import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { SectionHeading } from './About';
import { Award, Calendar, CheckCircle } from 'lucide-react';

const certs = [
  { title: 'MERN Stack Certification', issuer: 'Professional Course', date: '2024', icon: '🌐', skills: ['MongoDB', 'Express', 'React', 'Node.js'] },
  { title: 'Python Flask Web Development', issuer: 'ICT Academy', date: '2024', icon: '🐍', skills: ['Flask', 'REST API', 'Python', 'Backend'] },
  { title: 'DevOps Engineer Certification', issuer: 'Online Course', date: '2024', icon: '⚙️', skills: ['Docker', 'K8s', 'CI/CD', 'AWS'] },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="certifications" className="py-20 md:py-28" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <SectionHeading label="Certifications" title="Credentials that matter." subtitle="Industry-recognized certifications validating my expertise." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              className="bento-card p-5"
            >
              <div className="flex items-start gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'var(--bg-secondary)' }}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>{c.title}</h3>
                  <div className="flex items-center gap-1 mt-1 text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
                    <Award size={9} />{c.issuer}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3 text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
                <span className="flex items-center gap-1"><Calendar size={9} />{c.date}</span>
                <span className="flex items-center gap-1" style={{ color: 'var(--green)' }}><CheckCircle size={9} />Verified</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {c.skills.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded-md text-[9px] font-medium" style={{ background: 'var(--bg-secondary)', color: 'var(--text-tertiary)' }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
