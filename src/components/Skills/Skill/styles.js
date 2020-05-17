import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 23%;
  display: flex;
  border: 0.5px solid hsla(0, 0%, 50.2%, 0.1);
  border-radius: 10px;
  padding: 8px 16px 16px 16px;
  margin: 8px;
`;

export const IconWrapper = styled.span`
  align-self: center;
  height: 35px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  align-self: center;
`;

export const Title = styled.span`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Desc = styled.span`
  font-size: 14px;
  font-style: italic;
`;
