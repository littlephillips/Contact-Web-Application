import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'constants/routes';

import { StyledNav, StyledUL, StyledLI } from './NavBar.styled';

const NavBar = () => {
  return (
    <StyledNav>
      <StyledUL>
        {routes.map(({ path, title }) => (
          <StyledLI key={path}>
            <Link to={path}>{title}</Link>
          </StyledLI>
        ))}
      </StyledUL>
    </StyledNav>
  );
};

export default NavBar;
