import PropTypes from 'prop-types';

import TimelineItemWork from './TimelineItemWork';
import TimelineItemEducation from './TimelineItemEducation';
import { Wrapper } from './styles';

const Timeline = ({ items, type }) => {
  const joinArray = array => array.join(', ');

  const renderWork = () => {
    return items.map((item, key) => {
      const {
        companyName,
        title,
        date1,
        location,
        description: { methodologies, backend, frontend },
      } = item;

      const formattedMethodologies = joinArray(methodologies);
      const formattedBackend = joinArray(backend);
      const formattedFrontend = joinArray(frontend);

      return (
        <TimelineItemWork
          companyName={companyName}
          title={title}
          date={date1}
          location={location}
          methodologies={formattedMethodologies}
          backend={formattedBackend}
          frontend={formattedFrontend}
          key={key}
        />
      );
    });
  };

  const renderEducation = () => {
    return items.map((item, key) => {
      const { degree, title, fieldOfStudy, startDate, endDate } = item;

      return (
        <TimelineItemEducation
          degree={degree}
          school={title}
          fieldOfStudy={fieldOfStudy}
          startDate={startDate}
          endDate={endDate}
          key={key}
        />
      );
    });
  };

  const renderType = {
    WORK: renderWork,
    EDUCATION: renderEducation,
  };

  return <Wrapper>{renderType[type]()}</Wrapper>;
};

Timeline.propTypes = {
  items: PropTypes.array,
  type: PropTypes.string,
};

export default Timeline;
