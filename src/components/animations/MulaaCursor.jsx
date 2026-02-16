import React from 'react';
import TextCursor from './TextCursor';
import { Heart } from 'lucide-react';

const MulaaCursor = () => {
  // Different cursor styles based on page/context
  const cursors = {
    default: {
      text: '✦', // Default sparkle
      spacing: 80,
      maxPoints: 8
    },
    home: {
      text: '❤️', // Heart for home page
      spacing: 70,
      maxPoints: 10
    },
    products: {
      text: '⚡', // Lightning for products
      spacing: 60,
      maxPoints: 12
    },
    team: {
      text: '👥', // Team icon
      spacing: 90,
      maxPoints: 6
    },
    philosophy: {
      text: '🌀', // Spiral for philosophy
      spacing: 85,
      maxPoints: 7
    }
  };

  // You can change this based on the current route
  const currentCursor = cursors.default;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <TextCursor
        text={currentCursor.text}
        spacing={currentCursor.spacing}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={currentCursor.maxPoints}
      />
    </div>
  );
};

export default MulaaCursor;