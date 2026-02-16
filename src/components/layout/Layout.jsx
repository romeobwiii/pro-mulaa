import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CardNav from '../navigation/CardNav';
import Footer from './Footer';
import Logo from '../shared/Logo';
import BrandedCursor from '../animations/BrandedCursor';
import PageTransition from './PageTransition';
import { navItems, brandColors } from '../../data/navigationData';

const Layout = () => {
  const location = useLocation();

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
        
        <main className="flex-grow pt-20">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;