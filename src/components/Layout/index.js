import React from 'react';
import PropTypes from 'prop-types';

import { LayoutWrapper } from './styles';
import TwoColumns from '../TwoColumns';

import Presentation from '../Presentation';
import About from '../About';
import Experience from '../Experience';

// eslint-disable-next-line no-unused-vars
const Layout = ({ linkedinInfo, githubInfo }) => (
  <LayoutWrapper data-testid="layoutWrapper">
    <Presentation />
    <About />
    <Experience linkedinInfo={linkedinInfo} />
    <TwoColumns />
    <TwoColumns />
  </LayoutWrapper>
);

Layout.propTypes = {
  linkedinInfo: PropTypes.object,
  githubInfo: PropTypes.array,
};

export default Layout;
