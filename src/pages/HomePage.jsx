import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Products from '../components/home/Products';
import WhyMulaa from '../components/home/WhyMulaa';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import { AnimatedTitle, AnimatedSubtitle } from '../components/animations/GlobalAnimated';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="stagger-children"
    >
      <Hero />
      <Mission />
      <Products />
      <WhyMulaa />
      <Stats />
      <CTA />
    </motion.div>
  );
};

export default HomePage;