import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import TeachingApproach from './TeachingApproach';
import CTABanner from './CTABanner';

/**
 * The main homepage, composed of various sections: Hero, Teaching Approach,
 * CTA banner, etc.
 */
const Home: React.FC = () => {
  return (
    <Box>
      {/* The updated Hero with a 4-slide carousel */}
      <Hero />

      {/* Teaching Approach section (unchanged) */}
      <TeachingApproach />

      {/* CTA Banner (unchanged) */}
      <CTABanner />
    </Box>
  );
};

export default Home;
