import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SparklesTextProps {
  children: React.ReactNode;
  colors?: {
    first: string;
    second: string;
  };
  className?: string;
}

export const SparklesText: React.FC<SparklesTextProps> = ({
  children,
  colors = { first: '#4079ff', second: '#40ffaa' },
  className
}) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("relative inline-block", className)}>
      <span
        className="bg-gradient-to-r bg-clip-text text-transparent font-bold"
        style={{
          backgroundImage: `linear-gradient(45deg, ${colors.first}, ${colors.second})`,
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease infinite'
        }}
      >
        {children}
      </span>
      
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute w-1 h-1 bg-brand-warning rounded-full animate-sparkle pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}
    </div>
  );
};