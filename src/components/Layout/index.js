import PropTypes from 'prop-types';

import NavBar from '../NavBar';
import Presentation from '../Presentation';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Skills from '../Skills';
import AboutPortfolio from '../AboutPortfolio';

import { LayoutWrapper } from './styles';

const Layout = ({ linkedinInfo, githubInfo }) => (
  <>
    <NavBar />
    <LayoutWrapper data-testid="layoutWrapper">
      <Presentation />
      <About id="aboutMe" />
      <Experience linkedinInfo={linkedinInfo} />
      <Skills id="skills" />
      <Projects githubInfo={githubInfo} id="projects" />
      <AboutPortfolio id="aboutPortfolio" />
    </LayoutWrapper>
  </>
);

Layout.propTypes = {
  linkedinInfo: PropTypes.object,
  githubInfo: PropTypes.array,
};

export default Layout;
