import React from 'react';
import { motion } from 'framer-motion';

const SplineModel: React.FC = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center"
      animate={{ 
        rotateY: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <motion.div
        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-8 h-8 bg-white/40 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default SplineModel;