import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedStarButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverTextColor?: string;
  hoverShadow?: string;
  borderRadius?: string;
  className?: string;
}

const AnimatedStarButton: React.FC<AnimatedStarButtonProps> = ({
  children,
  onClick,
  bgColor = "bg-primary",
  textColor = "text-primary-foreground",
  borderColor = "border-primary",
  hoverTextColor = "hover:text-primary",
  hoverShadow = "hover:shadow-lg",
  borderRadius = "rounded-lg",
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        "relative px-6 py-3 border-2 font-semibold transition-all duration-300 overflow-hidden",
        bgColor,
        textColor,
        borderColor,
        hoverTextColor,
        hoverShadow,
        borderRadius,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Star className="w-4 h-4" />
        </motion.div>
      </span>
      
      {/* Sparkle effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-warning rounded-full"
              initial={{ 
                x: "50%", 
                y: "50%", 
                scale: 0 
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  );
};

export default AnimatedStarButton;