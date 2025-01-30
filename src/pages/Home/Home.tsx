// src/pages/Home/Home.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Educator App
      </Typography>
      <Typography variant="body1" paragraph>
        Highlights of my teaching approach and a quick welcome message.
      </Typography>

      {/* CTA Buttons */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="contained" color="primary">
          Book Now
        </Button>
        <Button variant="outlined" color="secondary">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
