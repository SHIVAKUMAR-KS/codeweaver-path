import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollStackProps {
  children: React.ReactNode;
  itemDistance?: number;
  className?: string;
}

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ 
  children, 
  itemClassName 
}) => {
  return (
    <div className={cn(
      "scroll-stack-card w-full p-8 bg-card border border-border rounded-3xl shadow-lg",
      itemClassName
    )}>
      {children}
    </div>
  );
};

const ScrollStack: React.FC<ScrollStackProps> = ({ 
  children, 
  itemDistance = 200,
  className 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.scroll-stack-card');
    
    cards.forEach((card, index) => {
      if (index === 0) return; // Skip first card (header)

      gsap.set(card, {
        y: itemDistance,
        scale: 0.9,
        opacity: 0.8
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        animation: gsap.to(card, {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "none"
        })
      });

      // Stack effect for previous cards
      ScrollTrigger.create({
        trigger: card,
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const prevCards = Array.from(cards).slice(0, index);
          
          prevCards.forEach((prevCard, prevIndex) => {
            const offset = (index - prevIndex) * 20;
            gsap.set(prevCard, {
              y: -progress * offset,
              scale: 1 - (progress * 0.05 * (index - prevIndex))
            });
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [itemDistance]);

  return (
    <div 
      ref={containerRef}
      className={cn("space-y-8", className)}
    >
      {children}
    </div>
  );
};

export default ScrollStack;