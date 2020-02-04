import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh * 4);
`;

export const NavBarWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 8vh;
  width: 100%;
  background-color: white;
`;

const BaseWrapper = styled.div`
  height: 25%;
`;

export const PresentationWrapper = styled(BaseWrapper)`
  background-color: red;
`;

export const AboutWrapper = styled(BaseWrapper)`
  background-color: green;
`;

export const ProjectsWrapper = styled(BaseWrapper)`
  background-color: blue;
`;

export const ContactWrapper = styled(BaseWrapper)`
  background-color: yellow;
`;
