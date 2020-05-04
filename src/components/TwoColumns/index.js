import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, FirstColumnWrapper, SecondColumnWrapper } from './styles';

const TwoColumns = ({ firstColumn, secondColumn, firstColumnWidth, secondColumnWidth }) => {
  return (
    <Wrapper>
      <FirstColumnWrapper width={firstColumnWidth}>{firstColumn}</FirstColumnWrapper>
      <SecondColumnWrapper width={secondColumnWidth}>{secondColumn}</SecondColumnWrapper>
    </Wrapper>
  );
};

TwoColumns.propTypes = {
  firstColumn: PropTypes.element,
  secondColumn: PropTypes.element,
  firstColumnWidth: PropTypes.string,
  secondColumnWidth: PropTypes.string,
};

export default TwoColumns;
