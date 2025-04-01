// src/components/LinkBehavior.tsx
import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type LinkBehaviorProps = Omit<NavLinkProps, 'to' | 'className'> & {
  href?: NavLinkProps['to'];
  className?: string;
  /**
   * CSS class added when the link is active.
   * Defaults to "active-route" if none provided.
   */
  activeClassName?: string;
};

const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkBehaviorProps>(
  function LinkBehavior(props, ref) {
    const {
      href,
      activeClassName = 'active-route',
      className: parentClassName = '',
      ...other
    } = props;

    return (
      <NavLink
        ref={ref}
        to={href ?? ''}
        className={({ isActive }) => {
          const activeClass = isActive ? activeClassName : '';
          return [parentClassName, activeClass].filter(Boolean).join(' ');
        }}
        {...other}
      />
    );
  }
);

export default LinkBehavior;
