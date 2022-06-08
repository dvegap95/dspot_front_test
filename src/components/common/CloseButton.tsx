import styled from '@emotion/styled';
import React from 'react';
import closeUrl from '../../assets/close.svg';

const StyledBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border-color: transparent;
  cursor: pointer;
`;

export default function CloseButton(
  props: React.HTMLAttributes<HTMLButtonElement> & { onClose: () => void },
) {
  const { onClose } = props;
  return (
    <StyledBtn type="button" {...props} onClick={() => onClose()}>
      <img src={closeUrl} alt="close" />
    </StyledBtn>
  );
}
