import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Animate } from 'react-simple-animate';

import { StarIcon, PencilIcon } from '../../shared/Icons';

import { Wrapper, TextWrapper, Name, Description, HeaderWrapper, Date, Language } from './styles';

const Project = ({ url, name, description, language, lastUpdate, stars }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Animate
      play={inView}
      duration="0.5"
      delay="0.3"
      start={{ opacity: 0 }}
      end={{ opacity: 1 }}
      complete={{ transition: 'all .5s linear 0s' }}
      render={({ style }) => (
        <Wrapper ref={ref} style={style}>
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
      )}
    ></Animate>
  );
};

Project.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  lastUpdate: PropTypes.string,
  stars: PropTypes.number,
};

export default Project;
