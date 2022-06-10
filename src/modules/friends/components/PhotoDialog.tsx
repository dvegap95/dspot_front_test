// dialog for displaying a full size image

import styled from '@emotion/styled';
import React from 'react';
import bigPictUrl from '../assets/big-pict.jpg';
import CloseButton from './CloseButton';

const Dialog = styled.div`
  //position and size
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;

  //container
  display: flex;
  align-items: center;
  justify-content: center;

  // props.open controlled display
  display: ${(props: { open: boolean }) => (props.open ? 'visible' : 'none')};

  //opaque background effect for modal indication
  background: rgba(55, 62, 90, 0.9);

  //show in front of most of elements
  z-index: 3;
`;

// actual image
const Image = styled.img`
  height: 70vh; //70% of viewport height, it will auto-scale width keeping aspect ratio
  filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.3));
  border-radius: 4px;
`;

const StyledCloseBtn = styled(CloseButton)`
  // local position info for a CloseButton component
  position: fixed;
  right: 60px;
  top: 60px;
`;

export default function PhotoDialog(
  // extend div propTypes for props pass-through
  props: React.HTMLAttributes<HTMLDivElement> & {
    // is the dialog open
    open: boolean;
    // handle cancel (close)
    onCancel: () => void;
  },
) {
  const { onCancel } = props;
  return (
    <Dialog
      {...props}
      onClick={(event) => {
        // ensure modal bhaviour
        event.stopPropagation();
      }}
      data-testid="photo_dialog"
    >
      <StyledCloseBtn onClick={() => onCancel()} data-testid="close_btn" />
      <Image src={bigPictUrl} />
    </Dialog>
  );
}
