import styled from '@emotion/styled';
import React from 'react';
import bigPictUrl from '../../assets/big-pict.jpg';

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
`;

const Image = styled.img`
  height: 70vh;
  background: url(image.png);
  filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.3));
  border-radius: 4px;
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
      onClick={() => {
        onCancel();
      }}
    >
      <Image src={bigPictUrl} />
    </Dialog>
  );
}
