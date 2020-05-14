import styled from 'styled-components';

export const Wrapper = styled.ol`
  list-style-type: none;
`;

export const TimelineItem = styled.li`
  position: relative;
  margin: 0;
  padding-bottom: 1em;
  padding-left: 20px;
  display: flex;
  flex-direction: column;

  :before {
    content: '';
    background-color: #a0aec0;
    opacity: 0.25;
    position: absolute;
    bottom: -10px;
    top: 10px;
    left: 6px;
    width: 3px;
  }

  :nth-last-child(1):before {
    display: none;
  }

  :after {
    content: '';
    margin-top: 1px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23fff' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
    position: absolute;
    left: 0;
    height: 15px;
    width: 15px;
  }
`;
