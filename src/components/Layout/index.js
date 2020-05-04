import React from 'react';

import { LayoutWrapper } from './styles';
import TwoColumns from '../TwoColumns';
import Presentation from '../Presentation';

const Layout = ({ linkedinInfo, githubInfo }) => (
  <LayoutWrapper data-testid="layoutWrapper">
    <Presentation />
    <TwoColumns />
    <TwoColumns />
  </LayoutWrapper>
);

Layout.propTypes = {
  linkedinInfo: PropTypes.object,
  githubInfo: PropTypes.array,
};

export default Layout;
