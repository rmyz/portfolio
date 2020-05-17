import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const OneColumn = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

OneColumn.propTypes = {
  children: PropTypes.array,
};

export default OneColumn;
