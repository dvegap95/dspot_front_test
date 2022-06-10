// detailed view of a single friend information

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FriendDetails } from '../types';
import defaultUserUrl from '../assets/no-user-image.jpg';
import custom_axios from '../utils/custom_axios';
import StatusChip from '../components/StatusChip';
import Tabs from '../../../common/components/Tabs';
import ProfilePicture from '../components/ProfilePicture';
import FriendDetailsInfo from '../components/friend_details/FriendDetailsInfo';
import FriendDetailsPhotos from '../components/friend_details/FriendDetailsPhotos';
import BackButton from '../components/BackButton';

// endpoint to fetch friend detailed information
const endpoint = 'https://private-5bdb3-friendmock.apiary-mock.com/friends/id';

const Container = styled.div`
  padding: 60px;
  margin: auto;
  max-width: 600px;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
`;

const StyledImage = styled(ProfilePicture)`
  height: 150px;
  width: 150px;
  margin-bottom: 13px;

  //available dot repositioning through classes
  .available-dot {
    border-width: 5px;
    left: -11px;
    top: -11px;
  }
`;

const NameLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: center;

  margin: 10px 0;

  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  color: #000000;
`;

// container for name and status
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
`;

const StyledStatusChip = styled(StatusChip)`
  margin-bottom: 30px;
`;

// silent container for the whole view, including back button
const Wrapper = styled.div`
  padding: 0 124px;
  position: relative;
  margin: auto;
  max-width: 848px;
`;

const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export default function FriendDetailsView() {
  const [friend, setFriend] = useState({} as FriendDetails); // current friend info
  const [selectedTab, setSelectedTab] = useState('Info'); // controlled tab model
  // const { id } = useParams(); //would be friend's actual id taken from url as a parameter
  // if api were fully functional

  const navigate = useNavigate();

  useEffect(() => {
    // fetch data on start
    custom_axios
      .get(endpoint)
      .then((resp) => {
        setFriend(resp.data);
      })
      .catch((e) => console.error(e)); // todo handle error with user feedback
  }, []);

  return (
    <Wrapper>
      <StyledBackButton
        onClick={() => navigate('/friends')}
        data-testid="back_btn"
      />
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
          tabs={['Info', 'Photos']} // tabs list
          tabValue={selectedTab}
          onTabChange={setSelectedTab}
          style={{ marginBottom: 10 }}
        />
        {/* display a view acording to tab //todo animate transitions */}
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
