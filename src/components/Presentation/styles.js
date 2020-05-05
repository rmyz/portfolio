import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  margin-left: 64px;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-family: 'Turbinado', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 116px;
  background: #40e0d0;
  background: linear-gradient(to left, #ff0080, #ff8c00, #40e0d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding-bottom: 5px;
`;

export const SubTitle = styled.h2`
  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 20px;
`;
