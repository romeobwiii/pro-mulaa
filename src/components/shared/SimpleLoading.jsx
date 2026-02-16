import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const SimpleLoading = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show loading for 2 seconds then fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-6">
          <Heart 
            className="w-24 h-24 text-secondary animate-pulse mx-auto" 
            fill="#D4AF37"
          />
          <div className="absolute inset-0 animate-ping">
            <Heart className="w-24 h-24 text-secondary opacity-30" fill="#D4AF37" />
          </div>
        </div>

        {/* Company Name */}
        <h1 className="font-serif text-5xl font-bold text-white mb-2">
          Mulaa
        </h1>
        
        {/* Tagline */}
        <p className="text-xl text-gray-200">
          <span className="text-secondary">tech with souls</span> and emotions
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default SimpleLoading;