import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import Title from '../shared/Title';
import OneColumn from '../shared/OneColumn';
import { ProjectsIcon } from '../shared/Icons';

import { ProjectsWrapper } from './styles';
import Project from './Project';

const Projects = ({ githubInfo }) => {
  const renderProjects = () => {
    return githubInfo.map((project, key) => {
      const { url, name, description, primaryLanguage, updatedAt, stargazers } = project;
      const formattedDate = dayjs(updatedAt).format('DD-MM-YYYY');

      return (
        <Project
          url={url}
          name={name}
          description={description}
          language={primaryLanguage}
          lastUpdate={formattedDate}
          stars={stargazers}
          key={key}
        />
      );
    });
  };

  return (
    <OneColumn>
      <Title>
        <ProjectsIcon /> PROJECTS
      </Title>
      <ProjectsWrapper>{renderProjects()}</ProjectsWrapper>
    </OneColumn>
  );
};

Projects.propTypes = {
  githubInfo: PropTypes.array,
};

export default Projects;
