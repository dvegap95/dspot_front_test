import styled from '@emotion/styled';
import React from 'react';

const StyledImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  left: 0;
  top: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  ${(props: { size?: number }) => `
    height: ${props.size || 60}px;
    min-width: ${props.size || 60}px;
  `}
`;

const AvailableDot = styled.div`
  position: absolute;
  top: -10%;
  left: -10%;
  height: 20%;
  max-height: 23px;
  width: 20%; //keep aspect ratio in both cases of use
  max-width: 23px;
  background-color: ${(p: { available?: boolean }) =>
    p?.available ? '#16BA44' : '#B1B9DB'};
  border: 2.5px solid #ffffff;
  margin: 2px;
  border-radius: 100px;
  box-sizing: border-box;
`;

export default function FriendImage(
  props: React.HTMLAttributes<HTMLDivElement> & {
    src: string;
    available: boolean;
  },
) {
  const { src, available } = props;
  return (
    <ImageContainer {...props}>
      <StyledImg src={src} className="friend-photo" />
      <AvailableDot available={available} className="available-dot" />
    </ImageContainer>
  );
}
