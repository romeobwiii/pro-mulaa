import React from 'react';
import Pillars from '../components/philosophy/Pillars';
import Framework from '../components/philosophy/Framework';
import MythicLayers from '../components/philosophy/MythicLayers';
import Manifesto from '../components/philosophy/Manifesto';

const PhilosophyPage = () => {
  return (
    <>
      <Pillars />
      <Framework />
      <MythicLayers />
      <Manifesto />
    </>
  );
};

export default PhilosophyPage;