import React from 'react';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Products from '../components/home/Products';
import WhyMulaa from '../components/home/WhyMulaa';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Products />
      <WhyMulaa />
      <Stats />
      <CTA />
    </>
  );
};

export default HomePage;
