import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import Title from '../Title';
import { ProjectsIcon, StarIcon, PencilIcon } from '../Icons';

import {
  Wrapper,
  ProjectsWrapper,
  ProjectWrapper,
  ProjectName,
  ProjectDescription,
  HeaderWrapper,
  DateWrapper,
  LanguageWrapper,
} from './styles';

const Projects = ({ githubInfo }) => {
  const renderProjects = () => {
    return githubInfo.map((project, key) => {
      const { url, name, description, primaryLanguage, updatedAt, stargazers } = project;
      const formattedDate = dayjs(updatedAt).format('DD-MM-YYYY');

      return (
        <ProjectWrapper key={key}>
          <HeaderWrapper>
            <ProjectName href={url} rel="noopener noreferrer" target="_blank">
              {name}
            </ProjectName>
            <span>
              {stargazers} <StarIcon />
            </span>
          </HeaderWrapper>
          <ProjectDescription>{description}</ProjectDescription>
          <LanguageWrapper>
            <PencilIcon /> Done with <b>{primaryLanguage}</b>
          </LanguageWrapper>
          <DateWrapper>Last update: {formattedDate}</DateWrapper>
        </ProjectWrapper>
      );
    });
  };

  return (
    <Wrapper>
      <Title>
        <ProjectsIcon /> PROJECTS
      </Title>
      <ProjectsWrapper>{renderProjects()}</ProjectsWrapper>
    </Wrapper>
  );
};

Projects.propTypes = {
  githubInfo: PropTypes.array,
};

export default Projects;
