import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code2, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profile from '../../assets/ajithprofile.png'
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
  About{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
    Me
  </span>
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-75" />
            </motion.div>
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm bg-gradient-to-br from-gray-800 to-gray-900">
              <ImageWithFallback
                src={profile}
                alt="Ajith Chandran G"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Passionate MCA student specializing in full-stack development and AI-powered solutions. 
                I build modern, scalable, and user-friendly applications that solve real-world problems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                  <span>Kerala, India</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <GraduationCap className="text-purple-400 w-5 h-5 flex-shrink-0" />
                  <span>MCA Final Year</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <Code2 className="text-blue-400 w-5 h-5 flex-shrink-0" />
                  <span>Full Stack Dev</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <Target className="text-pink-400 w-5 h-5 flex-shrink-0" />
                  <span>AI Enthusiast</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">Career Goal</h3>
              <p className="text-gray-300">
                Build modern web solutions and AI-powered applications for businesses and startups.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
