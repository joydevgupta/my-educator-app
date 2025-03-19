import React from 'react';
import { Box, Typography, Button } from '@mui/material';

/**
 * A simple call-to-action section encouraging users to book a session
 * or learn more about your services.
 */
const CTABanner: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'secondary.main',
        color: 'white',
        textAlign: 'center',
        py: 4,
        px: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Ready to Get Started?
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Book a session now or explore more about our offerings.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mr: 2 }}>
        Book a Session
      </Button>
      <Button variant="outlined" color="primary">
        Learn More
      </Button>
    </Box>
  );
};

export default CTABanner;
