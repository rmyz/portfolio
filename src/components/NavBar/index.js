import React, { Fragment } from 'react';
import { LogoWrapper, LinksWrapper } from './styles';

import Logo from '../Logo';
import Link from '../Link';

const NavBar = () => {
  return (
    <Fragment>
      <LogoWrapper data-testid="Navbar-LogoWrapper">
        <Logo />
      </LogoWrapper>
      <LinksWrapper data-testid="Navbar-LinksWrapper">
        <Link text="Home" />
        <Link text="About" />
        <Link text="Projects" />
      </LinksWrapper>
    </Fragment>
  );
};

export default NavBar;
