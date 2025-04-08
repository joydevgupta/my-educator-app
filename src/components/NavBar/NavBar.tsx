// src/components/NavBar/NavBar.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Courses', path: '/courses' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        {/* Left side: multiColor text logo */}
        <Box sx={{ flexGrow: 1 }}>
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

        {isMobile ? (
          <>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="end"
              sx={{ color: '#000' }} // Set a contrasting color (black) for visibility
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem button key={link.title}>
                      <NavLink
                        to={link.path}
                        style={{
                          textDecoration: 'none',
                          width: '100%',
                          color: 'inherit',
                        }}
                        className={({ isActive }) =>
                          isActive ? 'active-route' : 'navbar-link'
                        }
                      >
                        <ListItemText primary={link.title} />
                      </NavLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'navbar-link'
                }
                style={{ textDecoration: 'none' }}
              >
                <Button variant="text" color="inherit">
                  {link.title}
                </Button>
              </NavLink>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
