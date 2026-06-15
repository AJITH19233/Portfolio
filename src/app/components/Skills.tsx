import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { SectionHeading } from './About';
import { Monitor, Server, Database, Cloud, Brain, Code2, Wrench, ChevronDown } from 'lucide-react';

interface Skill { name: string; level: number; }
interface Cat { title: string; icon: any; skills: Skill[]; }

const cats: Cat[] = [
  { title: 'Frontend', icon: Monitor, skills: [
    { name: 'React.js', level: 90 },{ name: 'Angular', level: 75 },{ name: 'JavaScript', level: 90 },{ name: 'TypeScript', level: 82 },
    { name: 'HTML5', level: 95 },{ name: 'CSS3', level: 92 },{ name: 'Bootstrap', level: 88 },{ name: 'Tailwind CSS', level: 90 },
  ]},
  { title: 'Backend', icon: Server, skills: [
    { name: 'Python', level: 88 },{ name: 'Django', level: 85 },{ name: 'Flask', level: 80 },{ name: 'Node.js', level: 85 },{ name: 'Express.js', level: 83 },
  ]},
  { title: 'Database', icon: Database, skills: [
    { name: 'MySQL', level: 82 },{ name: 'MongoDB', level: 85 },{ name: 'SQLite', level: 78 },
  ]},
  { title: 'Cloud & DevOps', icon: Cloud, skills: [
    { name: 'AWS', level: 80 },{ name: 'Docker', level: 82 },{ name: 'Kubernetes', level: 78 },{ name: 'CI/CD', level: 80 },
    { name: 'GitHub Actions', level: 82 },{ name: 'Jenkins', level: 78 },{ name: 'Terraform', level: 75 },{ name: 'Ansible', level: 72 },
    { name: 'Linux', level: 85 },{ name: 'Git & GitHub', level: 92 },
  ]},
  { title: 'AI & Data', icon: Brain, skills: [
    { name: 'Machine Learning', level: 75 },{ name: 'Generative AI', level: 72 },{ name: 'Pandas', level: 80 },{ name: 'NumPy', level: 78 },
  ]},
  { title: 'Languages', icon: Code2, skills: [
    { name: 'Python', level: 88 },{ name: 'Java', level: 75 },{ name: 'C', level: 72 },{ name: 'C++', level: 70 },{ name: 'JavaScript', level: 90 },
  ]},
];

function SkillCard({ cat, idx }: { cat: Cat; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [expanded, setExpanded] = useState(false);
  const Icon = cat.icon;
  const visible = expanded ? cat.skills : cat.skills.slice(0, 4);
  const more = cat.skills.length > 4;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="bento-card p-5"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-secondary)' }}>
          <Icon size={15} style={{ color: 'var(--accent)' }} />
        </div>
        <div>
          <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{cat.title}</h3>
          <span className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>{cat.skills.length} skills</span>
        </div>
      </div>

      <div className="space-y-3">
        {visible.map((s, i) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1">
              <span className="text-[12px] font-medium truncate pr-2" style={{ color: 'var(--text-secondary)' }}>{s.name}</span>
              <span className="text-[10px] font-medium tabular-nums flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>{s.level}%</span>
            </div>
            <div className="h-[3px] rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'var(--accent)' }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 + i * 0.04 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </div>
        ))}
      </div>

      {more && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-[11px] font-medium transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          {expanded ? 'Show less' : `+${cat.skills.length - 4} more`}
          <ChevronDown size={12} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="Technologies I work with."
          subtitle="Proficient across the full stack, from frontend to cloud infrastructure."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {cats.map((c, i) => <SkillCard key={c.title} cat={c} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
