import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface IconCloudProps {
  images: string[];
  className?: string;
}

export const IconCloud: React.FC<IconCloudProps> = ({ images, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = container.querySelectorAll('.floating-icon');
    
    icons.forEach((icon, index) => {
      const element = icon as HTMLElement;
      const delay = index * 0.2;
      const duration = 4 + Math.random() * 2;
      
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = `${duration}s`;
      
      // Random position within the cloud
      const angle = (index / icons.length) * 2 * Math.PI;
      const radius = 80 + Math.random() * 40;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, [images]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-96 h-96 flex items-center justify-center", className)}
    >
      {images.slice(0, 20).map((image, index) => (
        <div
          key={index}
          className="floating-icon absolute w-12 h-12 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300"
          style={{
            animationDelay: `${index * 0.2}s`,
            zIndex: Math.floor(Math.random() * 10)
          }}
        >
          <img
            src={image}
            alt={`Technology ${index}`}
            className="w-full h-full object-contain filter hover:drop-shadow-lg transition-all duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      ))}
    </div>
  );
};