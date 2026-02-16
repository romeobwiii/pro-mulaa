import React, { useState, useEffect } from 'react';
import LoadingScreen from '../shared/LoadingScreen';

const AppWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      // Your actual app content
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onFinish={handleLoadingComplete} />;
  }

  return children;
};

export default AppWrapper;