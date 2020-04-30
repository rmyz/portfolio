import React from 'react';
import PropTypes from 'prop-types';
import {
  LayoutWrapper,
  NavBarWrapper,
  PresentationWrapper,
  AboutWrapper,
  ProjectsWrapper,
  ContactWrapper,
} from './styles';
import NavBar from '../NavBar';

const Layout = ({ linkedinInfo, githubInfo }) => (
  <LayoutWrapper data-testid="layoutWrapper">
    <NavBarWrapper>
      <NavBar />
    </NavBarWrapper>
    <PresentationWrapper />
    <AboutWrapper id="about" linkedinInfo={linkedinInfo} />
    <ProjectsWrapper id="projects" githubInfo={githubInfo} />
    <ContactWrapper />
  </LayoutWrapper>
);

Layout.propTypes = {
  linkedinInfo: PropTypes.object,
  githubInfo: PropTypes.array,
};

export default Layout;
