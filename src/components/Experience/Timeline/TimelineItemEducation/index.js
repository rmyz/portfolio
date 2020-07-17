import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Animate } from 'react-simple-animate';

import { ItemWrapper } from '../styles';

import { Degree, School, FieldOfStudy } from './styles';

const TimelineItemEducation = ({ degree, school, fieldOfStudy, startDate, endDate }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const renderFieldOfStudy = () => {
    if (fieldOfStudy) {
      return <FieldOfStudy>{fieldOfStudy}</FieldOfStudy>;
    }

    return null;
  };

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
          <Degree>{degree}</Degree>
          <School>{school}</School>
          {renderFieldOfStudy()}
          <FieldOfStudy>
            {startDate} - {endDate}
          </FieldOfStudy>
        </ItemWrapper>
      )}
    ></Animate>
  );
};

TimelineItemEducation.propTypes = {
  degree: PropTypes.string,
  school: PropTypes.string,
  fieldOfStudy: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default TimelineItemEducation;
