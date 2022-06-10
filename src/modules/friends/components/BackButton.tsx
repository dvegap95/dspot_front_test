// standard back button

import React from 'react';
import styled from '@emotion/styled';
import backUrl from '../assets/back.svg';

const StyledButton = styled.button`
  // container functions
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  //position and size
  position: absolute;
  left: 20px;
  top: 20px;
  width: 44px;
  height: 44px;

  background: #ffffff;
  border-radius: 8px;
  border-color: transparent;
  cursor: pointer;
`;

export default function BackButton(
  // extend button propTypes for props pass-through
  props: React.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <StyledButton {...props}>
      {/* back arrow image */}
      <img src={backUrl} alt="back" />
    </StyledButton>
  );
}
