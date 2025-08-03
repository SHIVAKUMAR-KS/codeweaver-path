import React, { useEffect, useRef } from 'react';

export const SmoothCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    if (!cursor || !trail) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      trail.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] transition-transform duration-300 ease-out"
      >
        <div className="w-full h-full rounded-full border border-brand-primary/30 animate-pulse-glow" />
      </div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999] transition-transform duration-100"
      >
        <div className="w-full h-full rounded-full bg-brand-primary/50 animate-shimmer" />
      </div>
    </>
  );
};