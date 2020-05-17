import React from 'react';
import PropTypes from 'prop-types';

import { LayoutWrapper } from './styles';
import TwoColumns from '../TwoColumns';

import Presentation from '../Presentation';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Skills from '../Skills';

const Layout = ({ linkedinInfo, githubInfo }) => (
  <LayoutWrapper data-testid="layoutWrapper">
    <Presentation />
    <About />
    <Experience linkedinInfo={linkedinInfo} />
    <Projects githubInfo={githubInfo} />
    <Skills />
    <TwoColumns />
    <TwoColumns />
  </LayoutWrapper>
);

Layout.propTypes = {
  linkedinInfo: PropTypes.object,
  githubInfo: PropTypes.array,
};

export default Layout;
