import React from 'react';
import { StyledLogo } from './styles';

const Logo = () => {
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return <StyledLogo data-testid="Logo" src="/logo.png" alt="rmyz.dev logo of the site" onClick={scrollTop} />;
};

export default Logo;
