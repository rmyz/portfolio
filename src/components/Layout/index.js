import React from 'react';
import {
  LayoutWrapper,
  NavBarWrapper,
  PresentationWrapper,
  AboutWrapper,
  ProjectsWrapper,
  ContactWrapper,
} from './styles';
import NavBar from '../NavBar';

const Layout = () => (
  <LayoutWrapper data-testid="layoutWrapper">
    <NavBarWrapper>
      <NavBar />
    </NavBarWrapper>
    <PresentationWrapper />
    <AboutWrapper id="about" />
    <ProjectsWrapper id="projects" />
    <ContactWrapper />
  </LayoutWrapper>
);

export default Layout;
