import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedStarButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  containerClassName?: string;
  className?: string;
}

const AnimatedStarButton: React.FC<AnimatedStarButtonProps> = ({
  children,
  onClick,
  containerClassName = "rounded-full h-15 w-max",
  className = "flex items-center justify-center text-sm bg-background text-primary h-10 px-3 py-1"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative p-[2px] rounded-full", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #4079ff, #40ffaa, #8b5cf6, #4079ff)",
        }}
        animate={{
          rotate: isHovered ? 0 : 0, // static for now
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: 0,
        }}
      />

      {/* Button content */}
      <button
        onClick={onClick}
        className={cn(
          "relative rounded-full transition-all duration-300 hover:shadow-lg",
          className
        )}
        style={{ cursor: "pointer" }}
      >
        <span className="flex items-center gap-2">
          {children}
          <Star className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
};

export default AnimatedStarButton;
