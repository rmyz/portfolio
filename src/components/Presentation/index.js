import React, { Fragment } from 'react';

import TwoColumns from '../TwoColumns';
import { Wrapper, Title, SubTitle } from './styles';

const Presentation = () => {
  const firstColumn = () => {
    return <img src="/me.png" alt="me" width="400px" />;
  };

  const secondColumn = () => {
    return (
      <Wrapper>
        <Title>Sergi Romeu</Title>
        <SubTitle>Fullstack Developer</SubTitle>
        <span>Links Here</span>
      </Wrapper>
    );
  };

  return (
    <Fragment>
      <TwoColumns
        id="presentation"
        firstColumnWidth="45%"
        secondColumnWidth="55%"
        firstColumn={firstColumn()}
        secondColumn={secondColumn()}
      />
    </Fragment>
  );
};

export default Presentation;
