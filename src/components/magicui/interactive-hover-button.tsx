import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const InteractiveHoverButton: React.FC<InteractiveHoverButtonProps> = ({
  children,
  onClick,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        "relative px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-full overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:shadow-brand-primary/25",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-accent opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="relative z-10"
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};