// row for displaying friend's resumed information and controls

import React from 'react';
import styled from '@emotion/styled';
import { Friend } from '../types';
import Button from '../../../common/components/Button';
import StatusChip from './StatusChip';
import ProfilePicture from './ProfilePicture';
// square image to apreciate border rounding
import defaultUserUrl from '../assets/no-user-image.jpg';

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 14px;

  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(204, 208, 223, 0.5);
  border-radius: 8px;
`;

// ProfilePicture styled for positioning
const StyledFriendImg = styled(ProfilePicture)`
  height: 60px;
  width: 60px;
  margin: 14px;
`;

// card middle ground for name and status
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: 14px 0;
  width: 100%;
`;

const NameLabel = styled.label`
  font-size: 16px;
  margin: 0;
`;

export default function FriendRow(props: {
  friend: Friend; // friend information to show
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
