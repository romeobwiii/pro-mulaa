
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';  // Make sure this import is here!
import PageLoader from '../shared/PageLoader';
import { getLoadingMessage } from '../../utils/loadingMessages';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // When location changes, show loader
    setIsLoading(true);
    setLoadingMessage(getLoadingMessage(location.pathname));
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location, children]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <PageLoader 
          key="loader" 
          message={loadingMessage} 
          onComplete={() => setIsLoading(false)} 
        />
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {displayChildren}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
