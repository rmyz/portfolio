import React, { Fragment } from 'react';

import TwoColumns from '../TwoColumns';

const Presentation = () => {
  const firstColumn = () => {
    return <img src="/me.png" alt="me" width="400px" />;
  };
  const secondColumn = () => {
    return (
      <Fragment>
        <h1>Sergi Romeu</h1>
        <h2>Fullstack Developer</h2>
        <h3>Links Here</h3>
      </Fragment>
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
