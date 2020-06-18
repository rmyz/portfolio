import styled from 'styled-components';

const getWrapperBorder = ({ devMode }) => devMode && `border: 3px solid red;`;
const getWrapperHeight = ({ isMainPage }) => isMainPage && `height: 100vh`;

export const Wrapper = styled.section`
  display: flex;
  margin: 0 calc(15vw);
  padding: 32px 0;

  @media (max-width: 940px) {
    flex-direction: column;

    * > .bigIcon {
      display: none;
    }
  }

  ${props => getWrapperBorder(props)};
  ${props => getWrapperHeight(props)};
`;

const getComputedWidth = ({ width = '50%' }) => `width: ${width}`;
const getFirstColumnWrapperBorder = ({ devMode }) => devMode && `border: 3px solid white;`;

export const FirstColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => getComputedWidth(props)};
  ${props => getFirstColumnWrapperBorder(props)};

  @media (max-width: 940px) {
    width: 100%;
  }
`;

const getSecondColumnWrapperBorder = ({ devMode }) => devMode && `border: 3px solid blue;`;

export const SecondColumnWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => getComputedWidth(props)};
  ${props => getSecondColumnWrapperBorder(props)};

  @media (max-width: 940px) {
    width: 100%;
  }
`;
