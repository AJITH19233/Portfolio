import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe, Layers, Palette, Sparkles } from 'lucide-react';

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services: Service[] = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites built with cutting-edge technologies.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
    },
    {
      icon: Layers,
      title: 'Full Stack Applications',
      description: 'End-to-end web applications with robust backend systems.',
      features: ['REST APIs', 'Database Design', 'Cloud Deployment'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      icon: Sparkles,
      title: 'AI-powered Solutions',
      description: 'Intelligent applications leveraging machine learning.',
      features: ['ML Integration', 'Data Analysis', 'Automation'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
  My{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
    Services
  </span>
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering high-quality solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all h-full">
                  {/* Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80"
                    >
                      <Icon className="text-white w-8 h-8" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
