import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onFinish();
          }, 500); // Delay before hiding
          return 100;
        }
        return prev + 2; // Increase by 2% each interval
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, [onFinish]);

  // Loading messages that change with progress
  const getMessage = () => {
    if (progress < 30) return "Awakening the soul...";
    if (progress < 60) return "Infusing emotions...";
    if (progress < 90) return "Building legacy...";
    return "Ready to inspire...";
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark"
    >
      <div className="text-center px-4">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Pulsing heart background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-secondary rounded-full blur-2xl"
            />
            
            {/* Main logo */}
            <div className="relative z-10 flex items-center justify-center gap-4">
              <Heart 
                className="w-20 h-20 text-secondary" 
                fill="#D4AF37"
              />
              <div className="text-left">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-white">
                  Mulaa
                </h1>
                <p className="font-sans text-2xl text-secondary">
                  Company
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tagline with animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-200 font-light tracking-wide">
            <span className="text-secondary font-semibold">tech with souls</span> and emotions
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-md mx-auto mb-4"
        >
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-secondary rounded-full"
            />
          </div>
        </motion.div>

        {/* Dynamic message */}
        <motion.p
          key={progress}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-300 text-sm"
        >
          {getMessage()}
        </motion.p>

        {/* Progress percentage */}
        <motion.p
          className="text-secondary font-bold text-lg mt-2"
        >
          {progress}%
        </motion.p>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-32 h-32 bg-secondary rounded-full blur-3xl"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;