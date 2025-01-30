// src/theme/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { teal, orange, grey, deepPurple } from '@mui/material/colors';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    // A bright, friendly palette
    primary: {
      main: teal[600], // A medium teal shade
    },
    secondary: {
      main: orange[500], // A warm accent color
    },
    background: {
      default: grey[50], // Subtle light grey background
    },
    text: {
      primary: '#333333', // Dark grey for text
      secondary: grey[700],
    },
  },
  typography: {
    // Overall font family (you can import a custom font or adjust as needed)
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,

    // Example overrides:
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
      color: deepPurple[900], // A deeper color for main headings
      letterSpacing: '0.5px',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: deepPurple[800],
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1rem',
      color: grey[800],
    },
    body2: {
      fontSize: '0.9rem',
      color: grey[700],
    },
    // You could add a custom 'hero' variant if you want big, eye-catching text in a hero section:
    // We must augment MUI's theme to use this custom variant properly in your code.
  },
  shape: {
    borderRadius: 8, // Slightly rounded corners for a friendlier look
  },
  components: {
    // Example component overrides
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Stop uppercase text
          borderRadius: 8, // Match global shape
          padding: '8px 16px',
        },
        containedPrimary: {
          // Make primary button stand out a bit more
          backgroundColor: teal[600],
          '&:hover': {
            backgroundColor: teal[700],
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          // For header bars, use primary color
          backgroundColor: teal[600],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Slightly more rounded for Cards
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
