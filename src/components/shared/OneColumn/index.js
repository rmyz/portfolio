import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const OneColumn = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

OneColumn.propTypes = {
  children: PropTypes.array,
};

export default OneColumn;
