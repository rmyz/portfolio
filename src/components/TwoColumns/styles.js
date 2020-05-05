import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  background: #121212;
  color: #ddd;
  margin: 0 calc(20vw) 0 calc(20vw);
  border: 3px solid red;
`;

const getComputedWidth = ({ width = '50%' }) => `width: ${width}`;

export const FirstColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;

  ${props => getComputedWidth(props)};
`;

export const SecondColumnWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid blue;

  ${props => getComputedWidth(props)};
`;
