import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { SectionHeading } from './About';
import { Cloud, Settings, ArrowRight, Workflow } from 'lucide-react';

export function DevOpsCloud() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const aws = [
    { name: 'EC2', desc: 'Compute', icon: '💻' },
    { name: 'S3', desc: 'Storage', icon: '🗂️' },
    { name: 'IAM', desc: 'Security', icon: '🔐' },
    { name: 'Route 53', desc: 'DNS', icon: '🌐' },
    { name: 'CloudWatch', desc: 'Monitor', icon: '📊' },
    { name: 'EKS', desc: 'Kubernetes', icon: '☸️' },
  ];

  const tools = [
    { name: 'Docker', cat: 'Containers', icon: '🐳' },
    { name: 'Kubernetes', cat: 'Orchestration', icon: '☸️' },
    { name: 'Jenkins', cat: 'CI/CD', icon: '🔨' },
    { name: 'Terraform', cat: 'IaC', icon: '🏗️' },
    { name: 'Ansible', cat: 'Config', icon: '🔧' },
    { name: 'GitHub Actions', cat: 'CI/CD', icon: '🤖' },
    { name: 'ArgoCD', cat: 'GitOps', icon: '🔄' },
    { name: 'Linux', cat: 'OS', icon: '🐧' },
  ];

  const pipeline = [
    { step: 'Code', icon: '💻', tool: 'Git' },
    { step: 'Build', icon: '🔨', tool: 'Jenkins' },
    { step: 'Test', icon: '✅', tool: 'Auto' },
    { step: 'Package', icon: '🐳', tool: 'Docker' },
    { step: 'Deploy', icon: '☸️', tool: 'K8s' },
    { step: 'Monitor', icon: '📊', tool: 'CW' },
  ];

  return (
    <section id="devops" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <SectionHeading label="Infrastructure" title="Cloud & DevOps." subtitle="Building reliable systems with modern cloud-native tools." />

        {/* AWS */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Cloud size={15} style={{ color: 'var(--accent)' }} />
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>AWS Services</h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {aws.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.04 }}
                className="bento-card p-3 text-center"
              >
                <span className="text-xl block mb-1.5">{s.icon}</span>
                <p className="text-[11px] font-semibold" style={{ color: 'var(--text-primary)' }}>{s.name}</p>
                <p className="text-[9px]" style={{ color: 'var(--text-tertiary)' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Settings size={15} style={{ color: 'var(--accent)' }} />
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>DevOps Toolchain</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.04 }}
                className="bento-card p-4 flex items-center gap-3"
              >
                <span className="text-lg">{t.icon}</span>
                <div>
                  <p className="text-[12px] font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: 'var(--bg-secondary)', color: 'var(--text-tertiary)' }}>{t.cat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pipeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-2 mb-4">
            <Workflow size={15} style={{ color: 'var(--accent)' }} />
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>CI/CD Pipeline</h3>
          </div>
          <div className="bento-card p-6">
            <div className="flex flex-wrap items-center justify-center gap-1">
              {pipeline.map((s, i) => (
                <div key={s.step} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-secondary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: 'var(--bg-secondary)' }}>{s.icon}</div>
                    <span className="text-[10px] font-semibold" style={{ color: 'var(--text-primary)' }}>{s.step}</span>
                    <span className="text-[8px]" style={{ color: 'var(--text-tertiary)' }}>{s.tool}</span>
                  </motion.div>
                  {i < pipeline.length - 1 && <ArrowRight size={11} className="mx-0.5 hidden sm:block" style={{ color: 'var(--text-tertiary)' }} />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
