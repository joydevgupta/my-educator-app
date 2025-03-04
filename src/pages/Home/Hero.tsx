import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Button } from '@mui/material';

interface Slide {
  imageUrl: string;
  title: React.ReactNode; // Allows text or JSX
  subtitle?: string;
}

const Hero: React.FC = () => {
  // Define the slides for your carousel
  const slides: Slide[] = [
    {
      // 1st slide -> Preserves your "Welcome to EDUFINITE" message
      imageUrl: './HeroSlide1.webp',
      title: (
        <>
          Welcome to{' '}
          <span className="multiColor">
            <span>E</span>
            <span>D</span>
            <span>U</span>
            <span>F</span>
            <span>I</span>
            <span>N</span>
            <span>I</span>
            <span>T</span>
            <span>E</span>
          </span>
        </>
      ),
      subtitle:
        'Highlights of my teaching approach and a quick welcome message.',
    },
    {
      // 2nd slide
      imageUrl: './HeroSlide2.webp',
      title: 'Your second message here...',
      subtitle: 'Subtitle or tagline for the second slide',
    },
    {
      // 3rd slide
      imageUrl: './HeroSlide3.webp',
      title: 'Your third message here...',
      subtitle: 'Subtitle or tagline for the third slide',
    },
    {
      // 4th slide
      imageUrl: './HeroSlide4.webp',
      title: 'Your fourth message here...',
      subtitle: 'Subtitle or tagline for the fourth slide',
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <Carousel
        animation="slide" // or "fade"
        interval={4000} // 4 seconds per slide
        navButtonsAlwaysVisible // arrows always visible
        indicators={false} // hide dots (set to true to show them)
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              height: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            {/* Optional overlay for better text contrast */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1, mx: 2, maxWidth: 600 }}>
              <Typography variant="h2" gutterBottom>
                {slide.title}
              </Typography>
              {slide.subtitle && (
                <Typography variant="body1" paragraph>
                  {slide.subtitle}
                </Typography>
              )}
              {/* Keep your two CTA buttons as before */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  mt: 3,
                }}
              >
                <Button variant="contained" color="secondary">
                  Book Now
                </Button>
                <Button variant="outlined" color="secondary">
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
