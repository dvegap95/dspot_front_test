// standard close button

import styled from '@emotion/styled';
import React from 'react';
import closeUrl from '../assets/close.svg';

const StyledBtn = styled.button`
  // container functions
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  //position and size
  width: 44px;
  height: 44px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border-color: transparent;
  cursor: pointer;
`;

export default function CloseButton(
  // extend button propTypes for props pass-through
  props: React.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <StyledBtn {...props}>
      <img src={closeUrl} alt="close" />
    </StyledBtn>
  );
}
