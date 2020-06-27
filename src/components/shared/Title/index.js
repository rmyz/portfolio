import PropTypes from 'prop-types';

import { StyledTitle } from './styles';

const Title = ({ children, ...rest }) => {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
};

Title.propTypes = {
  children: PropTypes.array,
};

export default Title;
