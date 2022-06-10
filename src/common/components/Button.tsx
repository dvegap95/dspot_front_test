// standard button

import styled from '@emotion/styled';

export default styled.button`
  //container functions
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  //position and size
  height: 40px;
  margin: 24px;
  padding: 8px 20px;
  gap: 8px;

  background: #2e57fa;
  border: 1px solid #0637f9;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;

  //text
  font-size: 16px;

  //pseudo clases
  &:hover {
    background-color: #0637f9;
  }
  &:active {
    background-color: #052dcc;
  }
  &:disabled {
    background-color: #f8f8fa;
    border: 1px solid #d0d3da;
  }
`;
