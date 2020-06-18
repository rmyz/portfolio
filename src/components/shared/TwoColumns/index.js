import PropTypes from 'prop-types';

import { Wrapper, FirstColumnWrapper, SecondColumnWrapper } from './styles';

const TwoColumns = ({
  firstColumn,
  secondColumn,
  firstColumnWidth,
  secondColumnWidth,
  devMode = false,
  isMainPage,
  ...rest
}) => {
  return (
    <Wrapper devMode={devMode} isMainPage={isMainPage} {...rest}>
      <FirstColumnWrapper width={firstColumnWidth} devMode={devMode}>
        {firstColumn}
      </FirstColumnWrapper>
      <SecondColumnWrapper width={secondColumnWidth} devMode={devMode}>
        {secondColumn}
      </SecondColumnWrapper>
    </Wrapper>
  );
};

TwoColumns.propTypes = {
  firstColumn: PropTypes.element,
  secondColumn: PropTypes.element,
  firstColumnWidth: PropTypes.string,
  secondColumnWidth: PropTypes.string,
  devMode: PropTypes.bool,
  isMainPage: PropTypes.bool,
};

export default TwoColumns;
