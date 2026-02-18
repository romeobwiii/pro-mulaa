import React from 'react';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Products from '../components/home/Products';
import WhyMulaa from '../components/home/WhyMulaa';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import AdBanner from '../components/shared/AdBanner';

const HomePage = () => {
  return (
    <>
      <Hero />
      
      {/* Banner ad between Hero and Mission */}
      <AdBanner 
        slot="YOUR_AD_SLOT_1" 
        style={{ minHeight: '90px', backgroundColor: '#f5f5f5' }}
      />
      
      <Mission />
      <Products />
      
      {/* Medium rectangle ad after Products */}
      <AdBanner 
        slot="YOUR_AD_SLOT_2" 
        format="rectangle"
        style={{ width: '300px', height: '250px', margin: '0 auto' }}
      />
      
      <WhyMulaa />
      <Stats />
      <CTA />
    </>
  );
};

export default HomePage;
