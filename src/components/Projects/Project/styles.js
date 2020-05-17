import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 8px;
  margin-bottom: 32px;
  border: 0.5px solid hsla(0, 0%, 50.2%, 0.1);
  border-radius: 10px;
`;

export const Name = styled.a`
  font-size: 18px;
  color: #ddd;

  :visited {
    color: #ddd;
  }

  :link {
    color: #ddd;
  }
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Language = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
`;

export const Date = styled.p`
  align-self: flex-end;
  font-style: italic;
`;
