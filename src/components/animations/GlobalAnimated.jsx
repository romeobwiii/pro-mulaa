import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

// Reusable components for different text types
export const AnimatedTitle = ({ children, className = '', ...props }) => (
  <AnimatedWrapper type="title" className={className} {...props}>
    {children}
  </AnimatedWrapper>
);

export const AnimatedSubtitle = ({ children, className = '', ...props }) => (
  <AnimatedWrapper type="subtitle" className={className} {...props}>
    {children}
  </AnimatedWrapper>
);

export const AnimatedText = ({ children, className = '', ...props }) => (
  <AnimatedWrapper type="text" className={className} {...props}>
    {children}
  </AnimatedWrapper>
);

export const AnimatedCardText = ({ children, className = '', ...props }) => (
  <AnimatedWrapper type="card" className={className} {...props}>
    {children}
  </AnimatedWrapper>
);

export const AnimatedStat = ({ children, className = '', ...props }) => (
  <AnimatedWrapper type="stat" className={className} {...props}>
    {children}
  </AnimatedWrapper>
);

export const AnimatedFooterText = ({ children, className = '', ...props }) => (
  <AnimatedWrapper type="footer" className={className} {...props}>
    {children}
  </AnimatedWrapper>
);

export const AnimatedButton = ({ children, className = '', ...props }) => (
  <AnimatedWrapper type="button" className={className} {...props}>
    {children}
  </AnimatedWrapper>
);