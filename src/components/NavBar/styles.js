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
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
