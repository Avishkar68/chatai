import React from 'react';
import { motion } from 'framer-motion';

const LoadingDots = () => {
  return (
    <div className="flex space-x-1 p-4 bg-slate-800 rounded-2xl rounded-tl-none border border-slate-700 w-16">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="h-1.5 w-1.5 bg-indigo-400 rounded-full"
        />
      ))}
    </div>
  );
};

export default LoadingDots;
