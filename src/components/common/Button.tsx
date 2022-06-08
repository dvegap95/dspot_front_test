import styled from '@emotion/styled';

export default styled.button`
  display: flex;
  height: 40px;
  margin: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  background: #2e57fa;
  border: 1px solid #0637f9;
  border-radius: 4px;
  flex: none;
  order: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #ffffff;

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
