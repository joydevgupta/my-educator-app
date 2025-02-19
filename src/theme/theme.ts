// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Soft sky-blue
      main: '#6EC5E9',
      // White text for better visibility on medium-bright blue
      contrastText: '#FFFFFF',
    },
    secondary: {
      // Gentle pastel pink
      main: '#F8A8BB',
      // White text still has acceptable contrast here
      contrastText: '#FFFFFF',
    },
    success: {
      // Minty green (quite light)
      main: '#C1E7C0',
      // Dark text for better contrast on a pale background
      contrastText: '#333333',
    },
    warning: {
      // Pale sunny yellow
      main: '#F8E9A1',
      // Dark text for clarity
      contrastText: '#333333',
    },
    error: {
      // Soft coral/pink
      main: '#F3BAB3',
      // Dark text for clarity
      contrastText: '#333333',
    },
    background: {
      // Light, warm neutral
      default: '#FDFDFD',
    },
    text: {
      // Dark gray for body text
      primary: '#333333',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
      color: '#333333',
      letterSpacing: '0.5px',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#555555',
      marginBottom: '0.5rem',
    },
    // Add more heading/body styles as you prefer
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
