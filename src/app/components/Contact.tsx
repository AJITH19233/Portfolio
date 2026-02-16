import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import resume from "../../assets/Resume.pdf";


export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const subject = encodeURIComponent(`Message from ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  );

  window.location.href =
    `mailto:ajithchandran132@gmail.com?subject=${subject}&body=${body}`;
};


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ajithchandran132@gmail.com',
      href: 'mailto:ajithchandran@email.com',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7510161923',
      href: 'tel:+917510161923',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kerala, India',
      href: '#',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/AJITH19233',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ajithchandran1923',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
  Get in{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
    Touch
  </span>
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-shadow flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all hover:border-white/30`}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-md rounded-xl p-8 border border-cyan-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-3">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-4">
                I'm always open to discussing new projects and opportunities.
              </p>
              <motion.a
  href={resume}
  download="Ajith_Chandran_Resume.pdf"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg"
>
  Download Resume
</motion.a>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
