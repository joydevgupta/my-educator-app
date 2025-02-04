import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

/**
 * Lists your course offerings: duration, schedule, learning outcomes, etc.
 */
const Courses: React.FC = () => {
  // Example data structure; replace with your actual course details
  const courses = [
    {
      title: 'Math Foundations',
      duration: '12 weeks',
      schedule: 'Mon & Wed, 4-5 PM',
      description: 'Build a strong base in math fundamentals...',
    },
    {
      title: 'Advanced English',
      duration: '8 weeks',
      schedule: 'Tue & Thu, 5-6 PM',
      description: 'Master grammar, vocabulary, and writing skills...',
    },
  ];

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Course Offerings
      </Typography>
      <Grid container spacing={2}>
        {courses.map((course, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {course.duration} &bull; {course.schedule}
                </Typography>
                <Typography variant="body1">{course.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
