import styled from 'styled-components';

export const Wrapper = styled.ol`
  list-style-type: none;
`;

export const TimelineItem = styled.li`
  position: relative;
  margin: 0;
  padding-bottom: 2em;
  padding-left: 30px;
  display: flex;
  flex-direction: column;

  :before {
    content: '';
    background-color: #a0aec0;
    opacity: 0.25;
    position: absolute;
    bottom: -20px;
    top: 20px;
    left: 6px;
    width: 3px;
  }

  :nth-last-child(1):before {
    display: none;
  }

  :after {
    content: '';
    margin-top: 14px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23fff' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
    position: absolute;
    left: 0;
    height: 15px;
    width: 15px;
  }
`;

export const BaseSpan = styled.span`
  margin-bottom: 8px;
  line-height: 1.625;
`;

export const TimelineTitle = styled(BaseSpan)`
  font-weight: 500;
  font-size: 24px;
`;

export const TimelinePosition = styled(BaseSpan)`
  font-weight: 300;
  font-size: 18px;
`;

export const TimelineLocation = styled(BaseSpan)`
  font-weight: 500;
  font-size: 14px;
`;

export const TimelineDescription = styled(BaseSpan)`
  font-size: 14px;
`;
