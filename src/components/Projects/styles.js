import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 calc(15vw) 0 calc(15vw);
  background: #121212;
  color: #ddd;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ProjectWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 8px;
  margin-bottom: 32px;
  border: 0.5px solid hsla(0, 0%, 50.2%, 0.1);
  border-radius: 10px;
`;

export const ProjectName = styled.a`
  font-size: 18px;
  color: #ddd;

  :visited {
    color: #ddd;
  }

  :link {
    color: #ddd;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LanguageWrapper = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const DateWrapper = styled.p`
  align-self: flex-end;
  font-style: italic;
`;
