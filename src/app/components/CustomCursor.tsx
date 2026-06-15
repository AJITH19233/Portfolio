import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.6 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
      >
        <div
          className="w-9 h-9 rounded-full"
          style={{
            border: `1.5px solid ${isPointer ? '#f5c542' : 'rgba(0, 210, 255, 0.5)'}`,
            transition: 'border-color 0.3s',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 2.5,
          y: mousePosition.y - 2.5,
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 40,
          mass: 0.3,
        }}
      >
        <div
          className="w-[5px] h-[5px] rounded-full"
          style={{
            background: isPointer
              ? '#f5c542'
              : 'linear-gradient(135deg, #00d2ff, #7c3aed)',
            boxShadow: isPointer
              ? '0 0 8px rgba(245, 197, 66, 0.4)'
              : '0 0 6px rgba(0, 210, 255, 0.3)',
            transition: 'background 0.3s, box-shadow 0.3s',
          }}
        />
      </motion.div>
    </>
  );
}
