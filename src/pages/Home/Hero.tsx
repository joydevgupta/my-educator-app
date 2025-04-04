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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
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
        backgroundColor: '#FDF9F4',
      }}
    >
      {!imagesLoaded ? (
        <Box
          sx={{
            width: '100%',
            height: '70vh',
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
                width: '100%',
                aspectRatio: '1792 / 1024', // Ensures container follows image aspect ratio
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#FDF9F4',
                backgroundSize: 'contain', // Ensures entire image is visible
                backgroundPosition: 'center',
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            >
              {/* Optional dark overlay for text readability */}
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
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontSize: '36px',
                    color: '#FFFFFF', // Sparkling white
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)',
                    lineHeight: 1.2,
                  }}
                >
                  {slide.title}
                </Typography>

                {slide.subtitle && (
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: '16px',
                      color: '#FFFFFF',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)',
                      lineHeight: 1.4,
                    }}
                  >
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
