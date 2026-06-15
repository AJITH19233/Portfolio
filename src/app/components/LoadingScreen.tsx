import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const i = setInterval(() => {
      setProgress((p) => (p >= 100 ? (clearInterval(i), 100) : p + Math.random() * 20 + 10));
    }, 60);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center" style={{ background: 'var(--bg, #FAFAFA)' }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-semibold tracking-tight mb-6"
        style={{ color: 'var(--text-primary, #111)' }}
      >
        Ajith<span style={{ color: 'var(--text-tertiary)' }}>.</span>dev
      </motion.p>
      <div className="w-32 h-[3px] rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ width: `${Math.min(progress, 100)}%`, background: 'var(--accent)' }}
        />
      </div>
    </div>
  );
}
