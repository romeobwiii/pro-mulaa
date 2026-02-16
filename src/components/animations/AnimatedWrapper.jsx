import React from 'react';
import DecryptedText from './DecryptedText';

// Map of animation types to different reveal directions
const animationStyles = {
  title: {
    animateOn: "view",
    sequential: true,
    revealDirection: "start",
    speed: 40,
    className: "text-primary font-bold",
    encryptedClassName: "text-secondary opacity-30",
  },
  subtitle: {
    animateOn: "view",
    sequential: true,
    revealDirection: "center",
    speed: 35,
    className: "text-secondary",
    encryptedClassName: "text-accent opacity-30",
  },
  text: {
    animateOn: "view",
    sequential: true,
    revealDirection: "start",
    speed: 30,
    className: "text-gray-700",
    encryptedClassName: "text-gray-300",
  },
  card: {
    animateOn: "hover",
    sequential: true,
    revealDirection: "center",
    speed: 25,
    className: "text-primary",
    encryptedClassName: "text-secondary opacity-50",
  },
  stat: {
    animateOn: "hover",
    sequential: true,
    revealDirection: "start",
    speed: 50,
    className: "text-2xl font-bold text-primary",
    encryptedClassName: "text-secondary",
  },
  footer: {
    animateOn: "view",
    sequential: true,
    revealDirection: "end",
    speed: 45,
    className: "text-gray-300",
    encryptedClassName: "text-gray-600",
  },
  button: {
    animateOn: "hover",
    sequential: false,
    maxIterations: 8,
    speed: 30,
    className: "text-current",
    encryptedClassName: "opacity-50",
  }
};

const AnimatedWrapper = ({ 
  children, 
  type = "text", 
  as: Component = 'div',
  className = '',
  ...props 
}) => {
  // If children is not a string, render normally
  if (typeof children !== 'string') {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component className={className}>
      <DecryptedText
        text={children}
        {...animationStyles[type]}
        {...props}
      />
    </Component>
  );
};

export default AnimatedWrapper;