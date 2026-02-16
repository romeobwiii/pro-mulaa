
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';  // Add this import
import { Heart } from 'lucide-react';

const PageLoader = ({ message, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark"
    >
      <div className="text-center px-4">
        {/* Small animated logo */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-4"
        >
          <Heart className="w-16 h-16 text-secondary" fill="#D4AF37" />
        </motion.div>

        {/* Dynamic message based on page */}
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-200 mb-3"
        >
          {message}
        </motion.p>

        {/* Simple progress bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-secondary rounded-full"
          />
        </div>

        <p className="text-secondary text-sm mt-2">loading...</p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
