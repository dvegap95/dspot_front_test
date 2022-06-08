import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom'; //for retrieving id from url
import { FriendDetails } from '../types';
import defaultUserUrl from '../assets/no-user-image.svg';
// import defaultUserUrl from '../assets/user.jpg';
import custom_axios from '../utils/custom_axios';
import StatusChip from '../components/common/StatusChip';
import Tabs from '../components/common/Tabs';
import FriendPicture from '../components/common/FriendPicture';
import FriendDetailsInfo from '../components/friend_details/FriendDetailsInfo';
import FriendDetailsPhotos from '../components/friend_details/FriendDetailsPhotos';
import BackButton from '../components/common/BackButton';

const endpoint = 'http://private-5bdb3-friendmock.apiary-mock.com/friends/id';

const Container = styled.div`
  padding: 60px;
  margin: auto;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
`;

const StyledImage = styled(FriendPicture)`
  height: 150px;
  width: 150px;
  margin-bottom: 13px;
  .available-dot {
    border-width: 5px;
    left: -11px;
    top: -11px;
  }
`;

const NameLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0;
  color: #000000;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const StyledStatusChip = styled(StatusChip)`
  margin-bottom: 30px;
`;

const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Wrapper = styled.div`
  padding: 0 124px;
  position: relative;
  margin: auto;
  max-width: 848px;
`;

export default function FriendDetailsView() {
  const [friend, setFriend] = useState({} as FriendDetails);
  const [selectedTab, setSelectedTab] = useState('Info');
  // const { id } = useParams(); //woud be friend id in a functional api

  const navigate = useNavigate();

  function goBack() {
    navigate('/friends');
  }

  useEffect(() => {
    custom_axios.get(endpoint).then((resp) => {
      setFriend(resp.data);
    });
  }, []);

  return (
    <Wrapper>
      <StyledBackButton onClick={() => goBack()} data-testid="back_btn" />
      <Container>
        <StyledImage
          data-testid="friend_profile_pict"
          available={friend.available}
          src={/* friend.img || */ defaultUserUrl}
        />
        <InfoContent>
          <NameLabel>{friend.first_name}</NameLabel>
          <StyledStatusChip>
            {friend.statuses && friend.statuses[0]}
          </StyledStatusChip>
        </InfoContent>
        <Tabs
          tabs={['Info', 'Photos']}
          tabValue={selectedTab}
          onTabChange={setSelectedTab}
          style={{ marginBottom: 10 }}
        />
        {selectedTab === 'Info' ? (
          <FriendDetailsInfo
            friend={friend}
            data-testid="friend_details_info"
          />
        ) : (
          <FriendDetailsPhotos
            photos={friend.photos}
            data-testid="friend_details_photos"
          />
        )}
      </Container>
    </Wrapper>
  );
}
