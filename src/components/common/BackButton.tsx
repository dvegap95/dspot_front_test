import React from 'react';
import styled from '@emotion/styled';
import backUrl from '../../assets/back.svg';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 44px;
  height: 44px;
  left: 20px;
  top: 20px;

  background: #ffffff;
  border-radius: 8px;
  border-color: transparent;
  cursor: pointer;
`;

export default function BackButton(
  props: React.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <Button {...props}>
      <img src={backUrl} alt="back" />
    </Button>
  );
}
