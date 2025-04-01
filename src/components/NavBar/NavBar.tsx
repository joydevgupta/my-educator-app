// src/components/NavBar/NavBar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EDUFINITE
        </Typography>

        {/* HOME */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-route' : '')}
          style={{ textDecoration: 'none' }}
        >
          <Button color="inherit">Home</Button>
        </NavLink>

        {/* ABOUT */}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active-route' : '')}
          style={{ textDecoration: 'none' }}
        >
          <Button color="inherit">About</Button>
        </NavLink>

        {/* COURSES */}
        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? 'active-route' : '')}
          style={{ textDecoration: 'none' }}
        >
          <Button color="inherit">Courses</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
