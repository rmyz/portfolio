import PropTypes from 'prop-types';

import { LocationIcon } from '../../shared/Icons';

import {
  Wrapper,
  TimelineItem,
  TimelineTitle,
  TimelinePosition,
  TimelineLocation,
  TimelineDescription,
} from './styles';

const Timeline = ({ items, type }) => {
  const renderWork = () => {
    return items.map((item, key) => (
      <TimelineItem key={key}>
        <TimelineTitle>{item?.companyName}</TimelineTitle>
        <TimelinePosition>
          {item?.title} <i>({item?.date1})</i>
        </TimelinePosition>
        <TimelineLocation>
          <LocationIcon /> {item.location}
        </TimelineLocation>
        <TimelineDescription>
          <b>Methodologies:</b> {item?.description?.methodologies?.join(', ')}
        </TimelineDescription>
        <TimelineDescription>
          <b>Backend:</b> {item?.description?.backend?.join(', ')}
        </TimelineDescription>
        <TimelineDescription>
          <b>Frontend:</b> {item?.description?.frontend?.join(', ')}
        </TimelineDescription>
      </TimelineItem>
    ));
  };

  const renderEducation = () => {
    return items.map((item, key) => (
      <TimelineItem key={key}>
        <TimelineTitle>{item?.degree}</TimelineTitle>
        <TimelinePosition>{item?.title}</TimelinePosition>
        {item?.fieldOfStudy && <TimelineLocation>{item?.fieldOfStudy}</TimelineLocation>}
        <TimelineLocation>
          <i>
            {item?.startDate} - {item?.endDate}
          </i>
        </TimelineLocation>
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
