import styled from 'styled-components';

import { BaseSpan } from '../styles';

export const Title = styled(BaseSpan)`
  font-weight: 500;
  font-size: 24px;

  @media (max-width: 940px) {
    font-size: 20px;
  }
`;

export const Position = styled(BaseSpan)`
  font-weight: 300;
  font-size: 18px;

  @media (max-width: 940px) {
    font-size: 16px;
  }
`;

export const Location = styled(BaseSpan)`
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 940px) {
    font-size: 12px;
  }
`;

export const Description = styled(BaseSpan)`
  font-size: 14px;
`;
