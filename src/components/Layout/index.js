import PropTypes from 'prop-types';

import Presentation from '../Presentation';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Skills from '../Skills';
import TwoColumns from '../shared/TwoColumns';
import AboutPortfolio from '../AboutPortfolio';

import { LayoutWrapper } from './styles';

const Layout = ({ linkedinInfo, githubInfo }) => (
  <LayoutWrapper data-testid="layoutWrapper">
    <Presentation />
    <About />
    <Experience linkedinInfo={linkedinInfo} />
    <Skills />
    <Projects githubInfo={githubInfo} />
    <AboutPortfolio />
    <TwoColumns />
  </LayoutWrapper>
);

Layout.propTypes = {
  linkedinInfo: PropTypes.object,
  githubInfo: PropTypes.array,
};

export default Layout;
