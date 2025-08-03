import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface VelocityScrollProps {
  children: React.ReactNode;
  defaultVelocity?: number;
  numRows?: number;
  className?: string;
  rowClassName?: string;
  delay?: number;
}

export const VelocityScroll: React.FC<VelocityScrollProps> = ({
  children,
  defaultVelocity = 2,
  numRows = 1,
  className,
  rowClassName,
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rows = container.querySelectorAll('.velocity-row');
    
    rows.forEach((row, index) => {
      const isEven = index % 2 === 0;
      const direction = isEven ? 'normal' : 'reverse';
      const speed = defaultVelocity + (index * 0.5);
      
      (row as HTMLElement).style.animationDirection = direction;
      (row as HTMLElement).style.animationDuration = `${20 / speed}s`;
      (row as HTMLElement).style.animationDelay = `${delay * index}s`;
    });
  }, [defaultVelocity, delay]);

  const renderRow = (index: number) => (
    <div
      key={index}
      className={cn(
        "velocity-row flex gap-4 animate-[scroll_20s_linear_infinite] whitespace-nowrap",
        rowClassName
      )}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="flex-shrink-0">
          {children}
        </div>
      ))}
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className={cn("flex flex-col gap-4 overflow-hidden", className)}
    >
      {Array.from({ length: numRows }, (_, i) => renderRow(i))}
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </div>
  );
};