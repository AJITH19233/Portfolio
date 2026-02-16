import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-center md:text-left flex items-center gap-2"
          >
            © 2026 Ajith Chandran G. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> in Kerala
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-6"
          >
            <a
              href="#home"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
