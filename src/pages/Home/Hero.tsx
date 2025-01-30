import { Typography, Box, Button } from '@mui/material';

export function Hero() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: 'primary.main', // or a custom color
        color: 'white',
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Welcome to My Educator App
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Helping students and parents navigate an exciting learning journey.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Start Learning
      </Button>
    </Box>
  );
}
