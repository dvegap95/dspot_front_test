import React from 'react';
import styled from '@emotion/styled';
import { Friend } from '../types';
import defaultUserUrl from '../assets/user.jpg';

const RowContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(204, 208, 223, 0.5);
  border-radius: 8px;
  margin: 14px;
  display: flex;
  flex-direction: row;
`;

const FriendImg = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 4px;
  left: 0;
  top: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 60px;
  min-width: 60px;
  margin: 14px;
`;

const AvailableDot = styled.div`
  position: absolute;
  top: -5px;
  left: -6px;
  height: 12px;
  width: 12px;
  background-color: ${(p: { available?: boolean }) => (p?.available ? '#16BA44' : '#B1B9DB')};
  z-index: 2;
  border: 2px solid #ffffff;
  margin: 2px;
  border-radius: 12px;
  box-sizing: border-box;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 14px 0;
  width: 100%;
`;

const NameLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

const StatusChip = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  border-radius: 24px;
  border: 1px solid #b1b9db;
  color: #b1b9db;
  padding: 0 10px;
  width: fit-content;
`;

const StyledButton = styled.button`
  display: flex;
  height: 40px;
  margin: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  background: #2e57fa;
  border: 1px solid #0637f9;
  border-radius: 4px;
  flex: none;
  order: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    background-color: #0637f9;
  }
  &:active {
    background-color: #052dcc;
  }
  &:disabled {
    background-color: #f8f8fa;
    border: 1px solid #d0d3da;
  }
`;

export default function FriendRow(props: { friend: Friend }) {
  const { friend } = props;
  return (
    <RowContainer>
      <ImageContainer>
        <AvailableDot available={friend.available} />
        <FriendImg src={/* friend.img || */ defaultUserUrl} />
      </ImageContainer>
      <InfoContent>
        <NameLabel>{friend.first_name}</NameLabel>
        <StatusChip>{friend.status}</StatusChip>
      </InfoContent>
      <StyledButton>Details</StyledButton>
    </RowContainer>
  );
}
