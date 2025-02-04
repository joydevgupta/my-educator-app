// import React from 'react';
import Hero from './Hero';
import CTABanner from './CTABanner';
import TeachingApproach from './TeachingApproach';
import { Box } from '@mui/material';

/**
 * The main homepage, composed of various sections: Hero, Teaching Approach,
 * CTA banner, etc.
 */
const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero section with a welcome message and optional CTA buttons */}
      <Hero />

      {/* Teaching Approach section */}
      <TeachingApproach />

      {/* CTA Banner */}
      <CTABanner />
    </Box>
  );
};

export default Home;
