import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Trophy, Star } from 'lucide-react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Award,
      title: 'MCA Projects',
      description: 'Successfully completed multiple full-stack projects',
      highlight: '5+ Projects',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led development teams in academic projects',
      highlight: 'Team Lead',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Trophy,
      title: 'Real-World Apps',
      description: 'Built production-ready web applications',
      highlight: 'Live Projects',
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: Star,
      title: 'Technical Skills',
      description: 'Expert in modern web technologies and AI',
      highlight: '10+ Technologies',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
  Acheivements &{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
      Experiences
  </span>
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proven track record in delivering quality projects and leading teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all text-center h-full">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <Icon className="text-white w-8 h-8" />
                    </motion.div>

                    {/* Highlight */}
                    <motion.div
                      className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                      animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {achievement.highlight}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="absolute top-4 left-4 text-6xl text-cyan-400/30">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-purple-400/30">"</div>
            <p className="text-xl md:text-2xl text-gray-300 text-center italic mb-4">
              Passionate about turning ideas into reality through code and innovation
            </p>
            <p className="text-cyan-400 text-center font-semibold">
              - Ajith Chandran G
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
