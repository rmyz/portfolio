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
        <Link text="Home" href="/" />
        <Link text="About" href="#about" />
        <Link text="Projects" href="#projects" />
      </LinksWrapper>
    </Fragment>
  );
};

export default NavBar;
