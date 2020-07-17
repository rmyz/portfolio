import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Animate } from 'react-simple-animate';

import { LocationIcon } from '../../../shared/Icons';
import { ItemWrapper } from '../styles';

import { Title, Position, Location, Description } from './styles';

const TimelineItemWork = ({ companyName, title, date, location, methodologies, backend, frontend }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Animate
      play={inView}
      duration="0.5"
      delay="0.3"
      start={{ opacity: 0, transform: 'translate3d(0,-100%,0)' }}
      end={{ opacity: 1, transform: 'translateZ(0)' }}
      complete={{ transition: 'all .5s linear 0s' }}
      render={({ style }) => (
        <ItemWrapper style={style} ref={ref}>
          <Title>{companyName}</Title>
          <Position>
            {title} <i>({date})</i>
          </Position>
          <Location>
            <LocationIcon /> {location}
          </Location>
          <Description>
            <b>Methodologies:</b> {methodologies}
          </Description>
          <Description>
            <b>Backend:</b> {backend}
          </Description>
          <Description>
            <b>Frontend:</b> {frontend}
          </Description>
        </ItemWrapper>
      )}
    ></Animate>
  );
};

TimelineItemWork.propTypes = {
  companyName: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  methodologies: PropTypes.string,
  backend: PropTypes.string,
  frontend: PropTypes.string,
};

export default TimelineItemWork;
