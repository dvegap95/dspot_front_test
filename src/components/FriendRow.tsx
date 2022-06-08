import React from 'react';
import styled from '@emotion/styled';
import { Friend } from '../types';
import Button from './common/Button';
import StatusChip from './common/StatusChip';
import FriendPicture from './common/FriendPicture';
import defaultUserUrl from '../assets/no-user-image.jpg';
// import defaultUserUrl from '../assets/user.jpg';

const RowContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(204, 208, 223, 0.5);
  border-radius: 8px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: row;
`;

const StyledFriendImg = styled(FriendPicture)`
  height: 60px;
  width: 60px;
  margin: 14px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 14px 0;
  width: 100%;
`;

const NameLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

export default function FriendRow(props: {
  friend: Friend;
  onClick: () => void;
}) {
  const { friend } = props;
  const { onClick } = props;
  return (
    <RowContainer>
      <StyledFriendImg
        available={friend.available}
        src={/* friend.img || */ defaultUserUrl}
      />
      <InfoContent>
        <NameLabel>{friend.first_name}</NameLabel>
        <StatusChip>{friend.status}</StatusChip>
      </InfoContent>
      <Button onClick={onClick}>Details</Button>
    </RowContainer>
  );
}
