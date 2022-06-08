import styled from '@emotion/styled';
import React, { useState } from 'react';
import defaultUserUrl from '../../assets/big-pict.jpg';
import PhotoDialog from '../common/PhotoDialog';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  max-height: 450px;
  overflow-y: auto;
  width: 488px;
  height: 488px;
  justify-content: center;
`;

const PhotoPreview = styled.img`
  height: 136px;
  width: auto;
`;

const PhotoPreviewContainer = styled.div`
  width: 136px;
  height: 136px;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  align-content: center;
  justify-items: center;
  justify-content: center;
  background-color: black;
  display: grid;
`;

export default function FriendDetailsPhotos(
  props: React.HTMLAttributes<HTMLDivElement> & {
    photos: Array<string>;
  },
) {
  const { photos } = props;
  const [dialog, setDialog] = useState(false);
  return (
    <>
      <Container {...props}>
        {photos &&
          photos.map((photo) => (
            <PhotoPreviewContainer onClick={() => setDialog(true)} key={photo}>
              <PhotoPreview src={/* photo || */ defaultUserUrl} />
            </PhotoPreviewContainer>
          ))}
      </Container>
      <PhotoDialog open={dialog} onCancel={() => setDialog(false)} />
    </>
  );
}
