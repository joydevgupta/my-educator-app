// src/components/NavBar/NavBar.tsx
import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const NavBar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none', // Remove default shadow for a clean look
      }}
    >
      <Toolbar>
        {/* Left side: multiColor text logo */}
        <Box sx={{ flexGrow: 1 }}>
          {/* 
            The .multiColor class is defined in App.css to color each letter 
            differently via nth-child. 
          */}
          <div
            className="multiColor"
            style={{ fontSize: '1.6rem', fontWeight: 600 }}
          >
            <span>E</span>
            <span>D</span>
            <span>U</span>
            <span>F</span>
            <span>I</span>
            <span>N</span>
            <span>I</span>
            <span>T</span>
            <span>E</span>
          </div>
        </Box>

        {/* NavLink: HOME */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active-route' : 'navbar-link'
          }
          style={{ textDecoration: 'none' }}
        >
          <Button variant="text">Home</Button>
        </NavLink>

        {/* NavLink: ABOUT */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'active-route' : 'navbar-link'
          }
          style={{ textDecoration: 'none' }}
        >
          <Button variant="text">About</Button>
        </NavLink>

        {/* NavLink: COURSES */}
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? 'active-route' : 'navbar-link'
          }
          style={{ textDecoration: 'none' }}
        >
          <Button variant="text">Courses</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
