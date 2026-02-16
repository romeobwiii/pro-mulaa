import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ children, delay = 0, duration = 3, distance = 20 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;