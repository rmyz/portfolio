import styled from 'styled-components';

import { BaseSpan } from '../styles';

export const Degree = styled(BaseSpan)`
  font-weight: 500;
  font-size: 24px;

  @media (max-width: 940px) {
    font-size: 20px;
  }
`;

export const School = styled(BaseSpan)`
  font-weight: 300;
  font-size: 18px;

  @media (max-width: 940px) {
    font-size: 16px;
  }
`;

export const FieldOfStudy = styled(BaseSpan)`
  font-weight: 500;
  font-size: 14px;
  font-style: italic;

  @media (max-width: 940px) {
    font-size: 12px;
  }
`;
