import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'AI Enthusiast',
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          } else {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-cyan-400 rounded-full"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Ajith Chandran G
            </span>
          </motion.h1>

          <motion.div
            className="h-16 md:h-20 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300">
              <span className="text-white">{displayText}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </p>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting modern web solutions and AI-powered applications from Kerala, India
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white/50 w-8 h-8" />
      </motion.a>
    </section>
  );
}
