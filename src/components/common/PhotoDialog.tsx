import styled from '@emotion/styled';
import React from 'react';
import bigPictUrl from '../../assets/big-pict.jpg';
import CloseButton from './CloseButton';

const Dialog = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props: { open: boolean }) => (props.open ? 'visible' : 'none')};
  background: rgba(55, 62, 90, 0.9);
  z-index: 3;
`;

const Image = styled.img`
  height: 70vh;
  background: url(image.png);
  filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.3));
  border-radius: 4px;
`;

const StyledCloseBtn = styled(CloseButton)`
  position: fixed;
  right: 60px;
  top: 60px;
`;

export default function PhotoDialog(
  props: React.HTMLAttributes<HTMLDivElement> & {
    open: boolean;
    onCancel: () => void;
  },
) {
  const { onCancel } = props;
  return (
    <Dialog
      {...props}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <StyledCloseBtn onClose={onCancel} />
      <Image src={bigPictUrl} />
    </Dialog>
  );
}
