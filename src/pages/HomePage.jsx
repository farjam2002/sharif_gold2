// File: src/pages/HomePage.jsx
// FINAL VERSION - COPY AND REPLACE ALL CONTENT

import React from 'react';

// Import all necessary sections for the home page in the correct order
import HeroSection from '../components/HeroSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import GallerySection from '../components/GallerySection.jsx';
import IntroStudio from '../components/IntroStudio.jsx';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <IntroStudio />
    </>
  );
};

export default HomePage;
