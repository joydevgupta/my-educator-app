// src/pages/About/About.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        {/* Showcase your qualifications, certifications, and teaching philosophy here. */}
        I am a professional educator with certifications in ...
      </Typography>
      <Typography variant="body1">
        {/* Highlight professional experience and unique methodologies. */}
        Over the years, I’ve developed a unique teaching methodology that ...
      </Typography>
    </Box>
  );
};

export default About;
