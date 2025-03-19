import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import TeachingApproach from './TeachingApproach';
import CTABanner from './CTABanner';

const Home: React.FC = () => {
  // 🔹 Track if the Hero section has fully loaded
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // 🔹 Small delay to ensure the Hero is fully rendered before showing CTA
    const timeout = setTimeout(() => setHeroLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box>
      {/* 🔹 Render Hero first */}
      <Hero />

      {/* Teaching Approach section remains unchanged */}
      <TeachingApproach />

      {/* 🔹 CTA Banner only appears after Hero is loaded */}
      {heroLoaded && <CTABanner />}
    </Box>
  );
};

export default Home;
