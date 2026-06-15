import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { SectionHeading } from './About';
import { Github, ExternalLink, ArrowUpRight, Star } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  emoji: string;
  featured?: boolean;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Cloud DevOps Automation Platform',
    description: 'End-to-end CI/CD pipeline with GitHub webhooks, Docker containerization, Kubernetes deployment, Jenkins automation, ArgoCD GitOps, and Infrastructure as Code.',
    features: ['GitHub Webhook Integration', 'Docker & K8s Deployment', 'Jenkins + ArgoCD GitOps', 'Terraform IaC', 'Monitoring & Logging'],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'GitHub Actions', 'ArgoCD', 'Python'],
    emoji: '☁️',
    featured: true,
    github: 'https://github.com/AJITH19233',
  },
  {
    title: 'SmartMediCare',
    description: 'Doctor appointment management platform with JWT authentication, admin dashboard, search & filtering, and RESTful APIs.',
    features: ['JWT Authentication', 'Appointment Management', 'Admin Dashboard', 'REST APIs'],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    emoji: '🏥',
    github: 'https://github.com/AJITH19233',
  },
  {
    title: 'MACFIESTA',
    description: 'College event registration system with admin dashboard, payment tracking, and student management.',
    features: ['Event Registration', 'Admin Dashboard', 'Payment Tracking'],
    tech: ['React', 'Django', 'MySQL'],
    emoji: '🎓',
    github: 'https://github.com/AJITH19233',
  },
  {
    title: 'Face Detection Attendance',
    description: 'AI-powered attendance system with face recognition, real-time detection, and admin management.',
    features: ['Face Recognition', 'Real-time Detection', 'Admin Panel'],
    tech: ['React', 'Flask', 'MySQL', 'OpenCV'],
    emoji: '👤',
    github: 'https://github.com/AJITH19233',
  },
  {
    title: 'AI Online Compiler (SmartCode)',
    description: 'Multi-language compiler with AI assistant, code explanation, history tracking, and integrated learning platform.',
    features: ['Multi-language Compiler', 'AI Code Assistant', 'Code History', 'Learning Platform'],
    tech: ['React', 'Django', 'OpenAI', 'MySQL'],
    emoji: '🧠',
    github: 'https://github.com/AJITH19233',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <SectionHeading label="Projects" title="Things I've built." subtitle="A selection of projects showcasing full stack, cloud, and AI skills." />

        {/* Featured project — full width */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bento-card p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ background: 'var(--accent)', color: '#fff' }}>
                <Star size={10} /> Featured
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="text-3xl block mb-3">{featured.emoji}</span>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{featured.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{featured.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {featured.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-medium" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>{t}</span>
                    ))}
                  </div>
                  <a href={featured.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                    <Github size={13} /> View on GitHub <ArrowUpRight size={11} />
                  </a>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>Key Features</h4>
                  {featured.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 p-2.5 rounded-xl text-[12px]" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />{f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="bento-card p-5 flex flex-col"
            >
              <div className="flex items-start gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'var(--bg-secondary)' }}>
                  {project.emoji}
                </div>
                <h3 className="text-sm font-semibold leading-tight pt-1" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
              </div>

              <p className="text-[12px] leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-tertiary)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md text-[9px] font-medium" style={{ background: 'var(--bg-secondary)', color: 'var(--text-tertiary)' }}>{t}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-medium mt-auto"
                style={{ color: 'var(--accent)' }}
              >
                <Github size={12} /> Source Code <ArrowUpRight size={10} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
