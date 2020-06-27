import styled from 'styled-components';

export const TextWrapper = styled.span`
  text-align: justify;
  white-space: break-spaces;

  @media (max-width: 940px) {
    text-align: initial;
  }
`;

export const Text = styled.p`
  line-height: 1.625;
  margin: 0 0 1rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
