import PropTypes from 'prop-types';

import { LocationIcon } from '../../../shared/Icons';
import { ItemWrapper } from '../styles';

import { Title, Position, Location, Description } from './styles';

const TimelineItemWork = ({ companyName, title, date, location, methodologies, backend, frontend }) => (
  <ItemWrapper>
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
);

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
