// a card containing a list of photos which are shown in a modal full-size dialog when clicked

import styled from '@emotion/styled';
import React, { useState } from 'react';
import bigPictUrl from '../../assets/big-pict.jpg';
import PhotoDialog from '../common/PhotoDialog';

// container card
const Card = styled.div`
  //container
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  //size
  width: 488px;
  height: 488px;
  max-height: 450px;

  overflow-y: auto; //scroll bar if content overflow
`;

// actual photo image to embed inside a square container for aspect-ratio keeping
const PhotoPreview = styled.img`
  //height fixed to container
  height: 136px;
  //for keeping aspect-ratio
  width: auto;
`;

// square container of the photo
const PhotoPreviewContainer = styled.div`
  //container
  align-content: center;
  justify-items: center;
  justify-content: center;
  display: grid;

  width: 136px;
  height: 136px;
  //hide picture overflow
  overflow: hidden;

  border-radius: 4px;
  background-color: black;
  cursor: pointer;
`;

export default function FriendDetailsPhotos(
  // div propTypes for props pass-through
  props: React.HTMLAttributes<HTMLDivElement> & {
    // array of photo's urls
    photos: Array<string>;
  },
) {
  const { photos } = props;
  // control whether the full-size dialog should be open
  const [dialog, setDialog] = useState(false);
  return (
    <>
      <Card {...props} className="scroll-view">
        {photos &&
          photos.map((photo) => (
            <PhotoPreviewContainer onClick={() => setDialog(true)} key={photo}>
              <PhotoPreview src={/* photo || */ bigPictUrl} />
            </PhotoPreviewContainer>
          ))}
      </Card>
      <PhotoDialog open={dialog} onCancel={() => setDialog(false)} />
    </>
  );
}
