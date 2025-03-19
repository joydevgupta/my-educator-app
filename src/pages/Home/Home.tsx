import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';

// 🔹 Lazy-load TeachingApproach & CTABanner
const TeachingApproach = lazy(() => import('./TeachingApproach'));
const CTABanner = lazy(() => import('./CTABanner'));

const Home: React.FC = () => {
  // 🔹 Track if the Hero section has fully loaded
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // 🔹 Small delay to ensure Hero is fully rendered before showing CTA
    const timeout = setTimeout(() => setHeroLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box>
      {/* 🔹 Render Hero first */}
      <Hero />

      {/* 🔹 Use Suspense to lazy-load TeachingApproach */}
      <Suspense
        fallback={
          <Box sx={{ textAlign: 'center', py: 3 }}>
            Loading Teaching Approach...
          </Box>
        }
      >
        <TeachingApproach />
      </Suspense>

      {/* 🔹 CTA Banner only appears after Hero is loaded */}
      {heroLoaded && (
        <Suspense
          fallback={
            <Box sx={{ textAlign: 'center', py: 3 }}>Loading CTA Banner...</Box>
          }
        >
          <CTABanner />
        </Suspense>
      )}
    </Box>
  );
};

export default Home;
