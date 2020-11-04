import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  margin-left: 32px;
  transform: translateX(15%);

  @media (max-width: 940px) {
    margin-top: 32px;
    margin-left: 0;
    transform: translateX(0);
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  font-family: 'Turbinado', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 106px;
  background: #40e0d0;
  background: linear-gradient(to left, #ff0080, #ff8c00, #40e0d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding: 5px;

  @media (max-width: 940px) {
    font-size: 80px;
  }
`;

export const SubTitle = styled.h2`
  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;

  @media (max-width: 940px) {
    justify-content: center;
  }
`;

export const StyledImage = styled(Image)`
  max-width: 80%;
  min-width: 350px;

  @media (max-width: 940px) {
    max-width: 50%;
    min-width: 250px;
  }
`;
