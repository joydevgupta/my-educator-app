import React from 'react';
import { Box, Typography, Button } from '@mui/material';

/**
 * A hero banner with a professional photo, welcome message,
 * and optional CTA buttons.
 */
const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 8,
        px: 2,
      }}
    >
      {/* Replace with an <img> or MUI <CardMedia> if you want a hero image */}
      <Typography variant="h2" gutterBottom>
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
      </Typography>
      <Typography variant="body1" paragraph>
        Highlights of my teaching approach and a quick welcome message.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="secondary">
          Book Now
        </Button>
        <Button variant="outlined" color="secondary">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
