import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Logo = ({ className = '', showTagline = false }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      {/* Animated icon */}
      <div className="relative">
        <Heart className="h-8 w-8 text-secondary animate-pulse" fill="#D4AF37" />
        <div className="absolute -inset-1 bg-secondary/20 blur-lg rounded-full animate-ping" />
      </div>
      
      {/* Text logo */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="font-serif text-2xl font-bold text-primary">Mulaa</span>
          <span className="font-sans text-lg font-medium text-secondary ml-1">Company</span>
        </div>
        {showTagline && (
          <span className="text-xs text-accent -mt-1">tech with souls and emotions</span>
        )}
      </div>
    </Link>
  );
};

export default Logo;