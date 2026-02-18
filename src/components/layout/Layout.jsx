import React from 'react';
import { Outlet } from 'react-router-dom';
import CardNav from '../navigation/CardNav';
import Footer from './Footer';
import Logo from '../shared/Logo';
import BrandedCursor from '../animations/BrandedCursor';
// Optional: Import if you want manual ads alongside Auto Ads
// import { LeaderboardAd } from '../shared/AdDisplay';
import { navItems, brandColors } from '../../data/navigationData';

const Layout = () => {
  return (
    <>
      <BrandedCursor />
      
      <div className="flex flex-col min-h-screen">
        <CardNav
          logo={<Logo />}
          logoAlt="Mulaa Company"
          items={navItems}
          baseColor="#FFFFFF"
          menuColor={brandColors.primary}
          buttonBgColor={brandColors.secondary}
          buttonTextColor={brandColors.dark}
          ease="power3.out"
        />
        
        {/* 
          With Auto Ads enabled in index.html, 
          Google will automatically place ads here.
          No manual ad code needed unless you want specific placements.
        */}
        
        {/* Optional: If you want a specific manual ad at the top */}
        {/* <LeaderboardAd slot="YOUR_MANUAL_SLOT_ID" /> */}
        
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        
        {/* Optional: If you want a specific manual ad at the bottom */}
        {/* <LeaderboardAd slot="YOUR_MANUAL_SLOT_ID" /> */}
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;
