import PropTypes from 'prop-types';

import { StyledTitle } from './styles';

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

Title.propTypes = {
  children: PropTypes.array,
};

export default Title;