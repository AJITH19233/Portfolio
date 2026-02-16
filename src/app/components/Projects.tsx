import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects: Project[] = [
    {
      title: 'AI Online Compiler (SmartCode)',
      description: 'An intelligent online code compiler with AI-powered code suggestions and real-time execution.',
      tags: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      gradient: 'from-cyan-400 to-blue-600',
    },
    {
      title: 'Doctor Appointment System',
      description: 'Complete healthcare management system with appointment scheduling and patient records.',
      tags: ['MERN', 'REST API', 'Authentication'],
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      title: 'Expense Tracker App',
      description: 'Smart expense tracking application with data visualization and budget management.',
      tags: ['React', 'Node.js', 'Charts', 'MySQL'],
      gradient: 'from-purple-400 to-pink-600',
    },
    {
      title: 'College Event Management System',
      description: 'Comprehensive platform for managing college events, registrations, and notifications.',
      tags: ['Django', 'PostgreSQL', 'Bootstrap'],
      gradient: 'from-orange-400 to-red-600',
    },
    {
      title: 'Face Detection Attendance System',
      description: 'AI-powered attendance tracking system using facial recognition technology.',
      tags: ['Python', 'OpenCV', 'Flask', 'AI/ML'],
      gradient: 'from-indigo-400 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
  Featured{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
    Projects
  </span>
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-2xl">🎓</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2`}
                  >
                    <ExternalLink size={16} />
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/10 text-white rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Github size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
