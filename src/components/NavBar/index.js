/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import {
  MenuIcon,
  AboutMeTitleIcon,
  WorkIcon,
  EducationIcon,
  SkillsIcon,
  ProjectsIcon,
  AboutPortfolioTitleIcon,
} from '../shared/Icons';

import { Wrapper, NavigationWrapper } from './styles';
import NavigationItem from './NavigationItem';

const NavBar = () => {
  const [isFocus, setIsFocus] = useState(false);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const renderNavMenu = () => {
    if (isFocus) {
      return (
        <>
          <NavigationItem Icon={AboutMeTitleIcon} tooltipId="aboutMeTooltip" tooltipText="About me" href="aboutMe" />
          <NavigationItem Icon={WorkIcon} tooltipId="workTooltip" tooltipText="Work" href="work" />
          <NavigationItem Icon={EducationIcon} tooltipId="educationTooltip" tooltipText="Education" href="education" />
          <NavigationItem Icon={SkillsIcon} tooltipId="skillsTooltip" tooltipText="Skills" href="skills" />
          <NavigationItem Icon={ProjectsIcon} tooltipId="projectsTooltip" tooltipText="Projects" href="projects" />
          <NavigationItem
            Icon={AboutPortfolioTitleIcon}
            tooltipId="aboutPortfolioTooltip"
            tooltipText="About Portfolio"
            href="aboutPortfolio"
          />
        </>
      );
    }

    return <MenuIcon />;
  };

  return (
    <Wrapper onMouseEnter={() => setIsFocus(true)} onMouseLeave={() => setIsFocus(false)}>
      <img
        src="/favicon.ico"
        alt="Go to top icon"
        height="32px"
        width="32px"
        data-tip
        data-for="goTop"
        style={{ cursor: 'pointer' }}
        onClick={scrollTop}
      />
      <ReactTooltip id="goTop" effect="solid" place="right">
        <span>Go to Top</span>
      </ReactTooltip>
      <NavigationWrapper>{renderNavMenu()}</NavigationWrapper>
    </Wrapper>
  );
};

export default NavBar;
