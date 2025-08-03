import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CircularTextProps {
  text: string;
  onHover?: 'speedUp' | 'slowDown' | 'reverse';
  spinDuration?: number;
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  onHover = 'speedUp',
  spinDuration = 20,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationDuration = () => {
    if (!isHovered) return `${spinDuration}s`;
    
    switch (onHover) {
      case 'speedUp':
        return `${spinDuration / 2}s`;
      case 'slowDown':
        return `${spinDuration * 2}s`;
      case 'reverse':
        return `${spinDuration}s`;
      default:
        return `${spinDuration}s`;
    }
  };

  const getAnimationDirection = () => {
    if (onHover === 'reverse' && isHovered) {
      return 'reverse';
    }
    return 'normal';
  };

  return (
    <div
      className={cn("relative w-32 h-32", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        style={{
          animation: `spin ${getAnimationDuration()} linear infinite`,
          animationDirection: getAnimationDirection()
        }}
      >
        <defs>
          <path
            id="circle-path"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text className="text-xs fill-current text-brand-primary font-medium">
          <textPath href="#circle-path">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText;