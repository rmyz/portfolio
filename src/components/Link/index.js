import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './styles';

const Link = ({ text }) => {
  return <StyledLink>{text}</StyledLink>;
};

Link.propTypes = {
  text: PropTypes.string,
};

export default Link;
