import PropTypes from 'prop-types';

import { ItemWrapper } from '../styles';

import { Degree, School, FieldOfStudy } from './styles';

const TimelineItemEducation = ({ degree, school, fieldOfStudy, startDate, endDate }) => {
  const renderFieldOfStudy = () => {
    if (fieldOfStudy) {
      return <FieldOfStudy>{fieldOfStudy}</FieldOfStudy>;
    }

    return null;
  };

  return (
    <ItemWrapper>
      <Degree>{degree}</Degree>
      <School>{school}</School>
      {renderFieldOfStudy()}
      <FieldOfStudy>
        {startDate} - {endDate}
      </FieldOfStudy>
    </ItemWrapper>
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
