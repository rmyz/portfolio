import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh * 4);
`;

export const NavBarWrapper = styled.div`
  height: 2%;
  background-color: black;
`;

export const PresentationWrapper = styled.div`
  height: 23%;
  background-color: red;
`;

const BaseWrapper = styled.div`
  height: 25%;
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
