import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { SectionHeading } from './About';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, CheckCircle } from 'lucide-react';
import resume from '../../assets/Resume.pdf';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const s = encodeURIComponent(`Message from ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:ajithchandran132@gmail.com?subject=${s}&body=${b}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const info = [
    { icon: Mail, label: 'Email', value: 'ajithchandran132@gmail.com', href: 'mailto:ajithchandran132@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7510161923', href: 'tel:+917510161923' },
    { icon: MapPin, label: 'Location', value: 'Kochi, Kerala, India', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        <SectionHeading label="Contact" title="Let's work together." subtitle="Have a project or opportunity? I'd love to hear from you." />

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Form */}
          <motion.div
            className="lg:col-span-3 bento-card p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle size={40} style={{ color: 'var(--green)' }} className="mb-4" />
                <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-[11px] font-medium uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-tertiary)' }}>Name</label>
                    <input
                      id="c-name" type="text" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-[11px] font-medium uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-tertiary)' }}>Email</label>
                    <input
                      id="c-email" type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-[11px] font-medium uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-tertiary)' }}>Message</label>
                  <textarea
                    id="c-msg" rows={4} required value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-colors"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  <Send size={14} /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className="lg:col-span-2 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {info.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className="bento-card p-4 flex items-center gap-3 block">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--bg-secondary)' }}>
                    <Icon size={15} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider font-medium" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                    <p className="text-xs font-medium truncate" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Social */}
            <div className="bento-card p-4">
              <h3 className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Connect</h3>
              <div className="flex gap-2">
                {[
                  { icon: Github, href: 'https://github.com/AJITH19233', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/ajithchandran1923', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:ajithchandran132@gmail.com', label: 'Email' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target={s.label !== 'Email' ? '_blank' : undefined} rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    aria-label={s.label}
                  >
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="bento-card p-4" style={{ borderColor: 'var(--accent)', borderWidth: '1px', borderStyle: 'solid', opacity: 0.8 }}>
              <h3 className="text-[11px] font-semibold mb-1" style={{ color: 'var(--accent)' }}>Ready to collaborate?</h3>
              <p className="text-[10px] mb-3" style={{ color: 'var(--text-tertiary)' }}>Download my resume for a detailed overview.</p>
              <a href={resume} download="Ajith_Chandran_Resume.pdf" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-semibold" style={{ background: 'var(--accent)', color: '#fff' }}>
                <Download size={12} /> Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
