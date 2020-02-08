import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './styles';

const Link = ({ text, href }) => {
  return <StyledLink href={href}>{text}</StyledLink>;
};

Link.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
