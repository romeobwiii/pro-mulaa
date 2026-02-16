import React from 'react';
import Story from '../components/about/Story';
import Muse from '../components/about/Muse';
import MissionVision from '../components/about/MissionVision';
import Location from '../components/about/Location';

const AboutPage = () => {
  return (
    <>
      <Story />
      <Muse />
      <MissionVision />
      <Location />
    </>
  );
};

export default AboutPage;