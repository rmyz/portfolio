import React from 'react';
import {
  LayoutWrapper,
  NavBarWrapper,
  PresentationWrapper,
  AboutWrapper,
  ProjectsWrapper,
  ContactWrapper,
} from './styles';

const Layout = () => (
  <LayoutWrapper data-testid="layoutWrapper">
    <NavBarWrapper />
    <PresentationWrapper />
    <AboutWrapper />
    <ProjectsWrapper />
    <ContactWrapper />
  </LayoutWrapper>
);

export default Layout;
