import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TextCursor from './TextCursor';

const BrandedCursor = () => {
  const location = useLocation();
  const [cursorSymbol, setCursorSymbol] = useState('✦');

  // Mulaa brand symbols
  const symbols = {
    heart: '❤️',
    star: '✨',
    diamond: '💎',
    sparkle: '✨',
    leaf: '🌿',
    fire: '🔥',
    moon: '🌙',
    sun: '☀️',
    infinity: '∞',
    atom: '⚛️',
    bolt: '⚡',
    music: '♪',
    peace: '☮️',
    flower: '🌸',
    wave: '🌊'
  };

  useEffect(() => {
    // Change symbol based on route
    switch(location.pathname) {
      case '/':
        setCursorSymbol(symbols.heart);
        break;
      case '/about':
        setCursorSymbol(symbols.star);
        break;
      case '/team':
        setCursorSymbol(symbols.flower);
        break;
      case '/products':
        setCursorSymbol(symbols.bolt);
        break;
      case '/philosophy':
        setCursorSymbol(symbols.infinity);
        break;
      case '/case-studies':
        setCursorSymbol(symbols.fire);
        break;
      case '/blog':
        setCursorSymbol(symbols.music);
        break;
      case '/contact':
        setCursorSymbol(symbols.sparkle);
        break;
      default:
        setCursorSymbol(symbols.diamond);
    }
  }, [location]);

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      pointerEvents: 'none', 
      zIndex: 999999,
      width: '100vw',
      height: '100vh'
    }}>
      <TextCursor
        text={cursorSymbol}
        spacing={60}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.4}
        removalInterval={20}
        maxPoints={12}
      />
    </div>
  );
};

export default BrandedCursor;