import React from 'react';
import DecryptedText from '../animations/DecryptedText';

const AnimatedTitle = ({ children, className = '', ...props }) => {
  return (
    <DecryptedText
      text={children}
      animateOn="view"
      sequential={true}
      revealDirection="start"
      speed={40}
      className="decrypted-revealed"
      encryptedClassName="decrypted-encrypted"
      parentClassName={`section-title ${className}`}
      {...props}
    />
  );
};

export default AnimatedTitle;