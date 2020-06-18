import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  margin: ${rem('16px')} 0;
  cursor: pointer;

  @media (max-width: 940px) {
    margin: 0 ${rem('16px')};
  }
`;
