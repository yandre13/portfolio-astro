import React from 'react';
import { motion } from 'framer-motion';

function AnimatedCp() {
  return (
    <div className="flex justify-end">
      <motion.div
        className="w-16 h-16"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          backgroundColor: [
            '#ff008c',
            '#d309e1',
            '#9c1aff',
            '#7700ff',
            '#4400ff',
          ],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}

export default AnimatedCp;
