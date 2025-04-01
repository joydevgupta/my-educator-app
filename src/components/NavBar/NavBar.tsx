// src/components/NavBar/NavBar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import LinkBehavior from '../LinkBehavior';
import './NavBar.css'; // Or merge these styles into your existing App.css

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EDUFINITE
        </Typography>

        {/* Link to Home */}
        <Button component={LinkBehavior} href="/" color="inherit">
          Home
        </Button>

        {/* Link to About */}
        <Button component={LinkBehavior} href="/about" color="inherit">
          About
        </Button>

        {/* Link to Courses */}
        <Button component={LinkBehavior} href="/courses" color="inherit">
          Courses
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
