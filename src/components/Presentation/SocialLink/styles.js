import styled from 'styled-components';

const getComputedBackground = ({ color = 'red' }) => `
  background: ${color}
`;

export const Circle = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  ${props => getComputedBackground(props)}
`;
