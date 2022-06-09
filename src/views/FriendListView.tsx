// view for listing existent friend's previews using FriendRow component
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Row from '../components/FriendRow';
import { Friend } from '../types';
import custom_axios from '../utils/custom_axios';

// endpoint to fetch friend detailed information
const endpoint = 'http://private-5bdb3-friendmock.apiary-mock.com/friends';

const Container = styled.div`
  margin: auto;
  max-width: 700px;
  padding: 30px 0 0 40px;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
`;

const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding-right: 40px;
  border-radius: 8px;

  overflow-y: auto;
  height: calc(100vh - 198px); //fullWidth - (tittle + totalPadding)
`;

// view title
const Title = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
  height: 24px;

  font-weight: 700;
  font-size: 24px;

  color: #b1b9db;
`;

export default function FriendList() {
  // actual friends list
  const [friends, setFriends] = useState([] as Array<Friend>);
  const navigate = useNavigate();

  function handleItemClick(friend: Friend) {
    navigate(`/friends/${friend.id}`); // visit corresponding friend route
  }

  useEffect(() => {
    // fetch data on start
    custom_axios.get(endpoint).then((resp) => {
      setFriends(resp.data);
    });
  }, []);

  return (
    <Container>
      <Title>Friends</Title>
      <FriendsContainer className="scroll-view">
        {friends.map((friend) => (
          // friend rows
          <Row
            friend={friend}
            key={friend.id}
            onClick={() => {
              handleItemClick(friend);
            }}
          />
        ))}
      </FriendsContainer>
    </Container>
  );
}
