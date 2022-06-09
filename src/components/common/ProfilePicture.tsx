// component for represent a friend's profile picture with an embedded
// dot indicating if he/she is available

import styled from '@emotion/styled';
import React from 'react';

const ImageContainer = styled.div`
  //placeholder for manually placed (position:absolute) image and available dot
  position: relative;
  ${(props: { size?: number }) => `
    height: ${props.size || 60}px;
    min-width: ${props.size || 60}px;
  `}
`;

const StyledImg = styled.img`
  //to manually place inside image container (left upper corner)
  position: absolute;
  left: 0;
  top: 0;

  //fill container size
  height: 100%;
  width: 100%;

  border-radius: 4px;
`;

// dot in representation of availability
const AvailableDot = styled.div`
  position: absolute;
  //little overflow over the top-left corner
  top: -10%;
  left: -10%;

  //keep aspect ratio (image-dot) in both cases of use
  height: 20%;
  max-height: 23px;

  //keep aspect ratio (image-dot) in both cases of use
  width: 20%;
  max-width: 23px;

  //color depending of available status
  background-color: ${(p: { available?: boolean }) =>
    p?.available ? '#16BA44' : '#B1B9DB'};

  //white thin border around
  border: 2.5px solid #ffffff;
  //guarantee it to be round
  border-radius: 100px;
  //sizing parameters applied considering the border
  box-sizing: border-box;
`;

export default function ProfilePicture(
  // div propTypes for props pass-through
  props: React.HTMLAttributes<HTMLDivElement> & {
    // url of the profile picture
    src: string;
    // available status
    available: boolean;
  },
) {
  const { src, available } = props;
  return (
    <ImageContainer {...props}>
      {/* image and availabledot locally stylable by adding
      classes to parent as styled component */}
      <StyledImg src={src} className="profile-photo" />
      <AvailableDot available={available} className="available-dot" />
    </ImageContainer>
  );
}
