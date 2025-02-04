// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';
import { teal, orange, grey, deepPurple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[600], // Customize as needed
    },
    secondary: {
      main: orange[500],
    },
    background: {
      default: grey[50],
    },
    text: {
      primary: '#333',
      secondary: grey[700],
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
      color: deepPurple[900],
      letterSpacing: '0.5px',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: deepPurple[800],
      marginBottom: '0.5rem',
    },
    // You can define h3, body1, etc., as you see fit
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
