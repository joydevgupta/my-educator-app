// src/components/NavLinkButton.tsx
import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

/**
 * Custom NavLink-based MUI Button to highlight active routes.
 */
interface NavLinkButtonProps extends ButtonProps {
  to: string;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({ to, ...props }) => {
  // Resolve the path for 'to', then match if the current URL includes it
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  // If match is truthy, we add an "active-button" class
  const className = match
    ? `active-button ${props.className || ''}`.trim()
    : props.className;

  return (
    <Button
      {...props}
      component={NavLink}
      to={to}
      className={className}
      // color="inherit" or "primary" etc. can also be set here if you want
    />
  );
};

export default NavLinkButton;
