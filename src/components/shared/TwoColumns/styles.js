import styled from 'styled-components';

const getWrapperBorder = ({ devMode }) => devMode && `border: 3px solid red;`;

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  background: #121212;
  color: #ddd;
  margin: 0 calc(15vw) 0 calc(15vw);

  ${props => getWrapperBorder(props)}
`;

const getComputedWidth = ({ width = '50%' }) => `width: ${width}`;
const getFirstColumnWrapperBorder = ({ devMode }) => devMode && `border: 3px solid white;`;

export const FirstColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => getComputedWidth(props)};
  ${props => getFirstColumnWrapperBorder(props)};
`;

const getSecondColumnWrapperBorder = ({ devMode }) => devMode && `border: 3px solid blue;`;

export const SecondColumnWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => getComputedWidth(props)};
  ${props => getSecondColumnWrapperBorder(props)};
`;
