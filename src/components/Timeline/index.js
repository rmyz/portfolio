import PropTypes from 'prop-types';
import { Wrapper, TimelineItem } from './styles';

const Timeline = ({ items, type }) => {
  const renderWork = () => {
    return items.map((item, key) => (
      <TimelineItem key={key}>
        <span>{item?.companyName}</span>
        <span>
          {item?.title} ({item?.date1})
        </span>
        <span>Location: {item.location}</span>
        <span>Methodologies: {item?.description?.methodologies?.join(', ')}</span>
        <span>Back-end: {item?.description?.backend?.join(', ')}</span>
        <span>Front-end: {item?.description?.frontend?.join(', ')}</span>
      </TimelineItem>
    ));
  };

  const renderEducation = () => {
    return items.map((item, key) => (
      <TimelineItem key={key}>
        <span>{item?.degree}</span>
        {item?.fieldOfStudy && <span>{item?.fieldOfStudy}</span>}
        <span>
          ({item?.startDate} - {item?.endDate})
        </span>
        <span>{item?.title}</span>
      </TimelineItem>
    ));
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
