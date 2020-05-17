import PropTypes from 'prop-types';

import { Circle } from './styles';

const SocialLink = ({ link, children, color }) => {
  return (
    <Circle href={link} rel="noopener noreferrer" color={color} target="_blank">
      {children}
    </Circle>
  );
};

SocialLink.propTypes = {
  link: PropTypes.string,
  children: PropTypes.element,
  color: PropTypes.string,
};

export default SocialLink;
