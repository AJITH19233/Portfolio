import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-10 h-10 border-2 border-cyan-400/50 rounded-full" />
      </motion.div>

      {/* Inner cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
        }}
      >
        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
      </motion.div>
    </>
  );
}
