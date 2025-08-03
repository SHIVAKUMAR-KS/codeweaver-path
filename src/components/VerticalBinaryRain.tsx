import React, { useEffect, useRef } from 'react';

const VerticalBinaryRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary rain configuration
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(0);
    const binary = '01';

    const draw = () => {
      // Semi-transparent black background for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = 'rgba(64, 255, 170, 0.3)';
      ctx.font = '12px monospace';

      drops.forEach((y, index) => {
        const text = binary[Math.floor(Math.random() * binary.length)];
        const x = index * 20;

        ctx.fillText(text, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index] += 10;
      });
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ background: 'transparent' }}
    />
  );
};

export default VerticalBinaryRain;