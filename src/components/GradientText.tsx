import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors,
  animationSpeed = 3,
  showBorder = false,
  className
}) => {
  const gradientStyle = {
    background: `linear-gradient(45deg, ${colors.join(', ')})`,
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `gradient-shift ${animationSpeed}s ease infinite`
  };

  return (
    <span 
      className={cn(
        "relative inline-block",
        showBorder && "border border-brand-primary/20 rounded-lg p-2",
        className
      )}
      style={gradientStyle}
    >
      {children}
    </span>
  );
};

export default GradientText;