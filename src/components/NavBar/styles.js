import styled from 'styled-components';

import { rem } from 'polished';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  padding: ${rem('16px')};

  @media (max-width: 940px) {
    left: 0;
    right: 0;
    top: auto;
    bottom: auto;
    flex-direction: row;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 940px) {
    width: 100%;
    flex-direction: row;
    height: auto;
  }
`;
