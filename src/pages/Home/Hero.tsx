import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Slide {
  imageUrl: string;
  title: React.ReactNode; // Allows text or JSX
  subtitle?: string;
}

const slides: Slide[] = [
  {
    imageUrl: './HeroSlide1.webp',
    title: 'Welcome to EDUFINITE',
    subtitle:
      'Refine, Express, Excel - Personalized Online English Coaching for Young Minds.',
  },
  {
    imageUrl: './HeroSlide2.webp',
    title: 'Your Dedicated English Mentor',
    subtitle:
      'One-on-One Guidance to Spark Confidence and Life-Long Language Skills',
  },
  {
    imageUrl: './HeroSlide3.webp',
    title: 'Engage, Explore, Excel',
    subtitle:
      'Interactive Lessons Crafted for Each Child’s Unique Pace and Curiosity',
  },
  {
    imageUrl: './HeroSlide4.webp',
    title: 'Step Into Success',
    subtitle:
      'Personalized Plans, Inspiring Feedback, and a Clear Path to Fluent English',
  },
];

const Hero: React.FC = () => {
  // 🔹 Track if images are fully loaded
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // 🔹 Preload images before displaying the Hero section
    let loaded = 0;
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.imageUrl;
      img.onload = () => {
        loaded++;
        if (loaded === slides.length) setImagesLoaded(true);
      };
    });
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        minHeight: '70vh', // 🔹 Ensures the Hero section always takes space
        backgroundColor: '#FDF9F4', // 🔹 Prevents layout shifts
      }}
    >
      {/* 🔹 Show a loading state until images are fully loaded */}
      {!imagesLoaded ? (
        <Box
          sx={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: '#FDF9F4',
          }}
        >
          <Typography variant="h4" color="gray">
            Loading...
          </Typography>
        </Box>
      ) : (
        <Carousel
          animation="slide"
          interval={4000}
          navButtonsAlwaysVisible={false}
          indicators={false}
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
                backgroundColor: '#FDF9F4',
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

              <Box
                sx={{ position: 'relative', zIndex: 1, mx: 2, maxWidth: 600 }}
              >
                <Typography variant="h2" gutterBottom>
                  {slide.title}
                </Typography>
                {slide.subtitle && (
                  <Typography variant="body1" paragraph>
                    {slide.subtitle}
                  </Typography>
                )}
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
      )}
    </Box>
  );
};

export default Hero;
