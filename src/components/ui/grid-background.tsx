import React from 'react';
import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ children, className }) => {
  return (
    <div className={cn("relative w-full min-h-screen", className)}>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--grid-color)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--grid-color)) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};