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
  spinDuration = 40,
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
      className={cn('relative w-[200px] h-[200px]', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 150 150"
        style={{
          animation: `spin ${getAnimationDuration()} linear infinite`,
          animationDirection: getAnimationDirection(),
          transformOrigin: 'center center'
        }}
      >
        <defs>
          <path
            id="circle-path"
            d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
        </defs>
        <text className="text-[20px] fill-white text-brand-warning font-bold">
          <textPath href="#circle-path" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText;
