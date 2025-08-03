import React from 'react';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
  text, 
  disabled = false, 
  speed = 3, 
  className 
}) => {
  return (
    <span 
      className={cn(
        "relative inline-block bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent bg-[length:200%_100%]",
        !disabled && "animate-gradient-shift",
        className
      )}
      style={{
        animationDuration: `${speed}s`
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;