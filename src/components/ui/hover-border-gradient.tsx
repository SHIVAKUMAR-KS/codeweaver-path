import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  onClick?: () => void;
}

export const HoverBorderGradient: React.FC<HoverBorderGradientProps> = ({
  children,
  containerClassName,
  className,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative p-[2px] rounded-full", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #4079ff, #40ffaa, #8b5cf6, #4079ff)',
        }}
        animate={{
          rotate: isHovered ? 0 : 0
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: 0, // No repeat; only rotate once
        }}
      />
      
      <button
        onClick={onClick}
        className={cn(
          "relative px-6 py-3 rounded-full transition-all duration-300",
          "hover:shadow-lg",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};
