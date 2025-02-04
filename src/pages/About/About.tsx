import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

/**
 * Showcases your qualifications, certifications, and teaching philosophy.
 */
const About: React.FC = () => {
  return (
    <Box sx={{ py: 4, px: 2, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Avatar
        src="/path/to/your-photo.jpg" // Replace with your image path
        sx={{ width: 100, height: 100, mb: 2 }}
      />
      <Typography variant="body1" paragraph>
        {/* Showcase certifications, teaching philosophy, etc. */}I am a
        dedicated educator with X years of experience...
      </Typography>
      <Typography variant="body1">
        {/* Highlight professional experience, methodologies, etc. */}
        My primary goal is to foster a love for learning by...
      </Typography>
    </Box>
  );
};

export default About;
