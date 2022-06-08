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
  top: -5px;
  left: -6px;
  height: 12px;
  width: 12px;
  background-color: ${(p: { available?: boolean }) =>
    p?.available ? '#16BA44' : '#B1B9DB'};
  z-index: 2;
  border: 2px solid #ffffff;
  margin: 2px;
  border-radius: 12px;
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
      <StyledImg src={src} />
      <AvailableDot available={available} />
    </ImageContainer>
  );
}
