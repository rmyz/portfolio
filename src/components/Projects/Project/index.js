import PropTypes from 'prop-types';

import { StarIcon, PencilIcon } from '../../shared/Icons';

import { Wrapper, TextWrapper, Name, Description, HeaderWrapper, Date, Language } from './styles';

const Project = ({ url, name, description, language, lastUpdate, stars }) => (
  <Wrapper>
    <TextWrapper>
      <HeaderWrapper>
        <Name href={url} rel="noopener noreferrer" target="_blank">
          {name}
        </Name>
        <span>
          {stars} <StarIcon />
        </span>
      </HeaderWrapper>
      <Description>{description}</Description>
      <Language>
        <PencilIcon /> Done with <b>{language}</b>
      </Language>
      <Date>Last update: {lastUpdate}</Date>
    </TextWrapper>
  </Wrapper>
);

Project.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  lastUpdate: PropTypes.string,
  stars: PropTypes.number,
};

export default Project;
