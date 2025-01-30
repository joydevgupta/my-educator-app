// src/pages/Courses/Courses.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Courses: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Course Offerings
      </Typography>
      <Typography variant="body1" paragraph>
        {/* List courses with details on duration, schedule, and outcomes. */}I
        offer a variety of courses including ...
      </Typography>
      <Typography variant="body1">
        {/* Enrollment information and course structure. */}
        For enrollment, please contact ...
      </Typography>
    </Box>
  );
};

export default Courses;
