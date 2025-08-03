import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MorphingTextProps {
  texts: string[];
  className?: string;
}

export const MorphingText: React.FC<MorphingTextProps> = ({ texts, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -50, rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-akashi font-bold text-brand-warning/20"
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};