import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * Outlines your main teaching philosophy or methodology.
 */
const TeachingApproach: React.FC = () => {
  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Typography variant="h2" gutterBottom>
        My Teaching Approach
      </Typography>
      <Typography variant="body1" paragraph>
        I focus on interactive and personalized lessons, ensuring students stay
        engaged and excited about learning. Classes are designed around
        real-life applications...
      </Typography>
      <Typography variant="body1" paragraph>
        Parents receive regular progress updates, with an emphasis on building a
        strong foundation of knowledge and critical thinking. My approach
        fosters independent learning and confidence...
      </Typography>
    </Box>
  );
};

export default TeachingApproach;
