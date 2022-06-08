import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Row from '../components/FriendRow';
import { Friend } from '../types';
import custom_axios from '../utils/custom_axios';

const endpoint = 'http://private-5bdb3-friendmock.apiary-mock.com/friends';

const Container = styled.div`
  padding: 30px 0 0 40px;
  background: rgba(255, 255, 255, 0.5);
  margin: auto;
  max-width: 700px;
`;

const FriendsContainer = styled.div`
  display: flex;
  padding-right: 40px;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px;
  overflow-y: auto;
  height: calc(100vh - 78px); //fullWidth - (tittle + padding)
  &::-webkit-scrollbar {
    width: 5px;
    color: #b1b9db;
  }
  &::-webkit-scrollbar-track {
    background: #b1b9db30;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b1b9db;
    border-radius: 8px;
  }
`;

const Title = styled.div`
  height: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #b1b9db;
  margin-bottom: 24px;
`;

export default function FriendList() {
  const [friends, setFriends] = useState([] as Array<Friend>);
  const navigate = useNavigate();

  function getData() {
    custom_axios.get(endpoint).then((resp) => {
      setFriends(resp.data);
    });
  }

  function handleItemClick(friend: Friend) {
    navigate(`/friends/${friend.id}`);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Title>Friends</Title>
      <FriendsContainer>
        {friends.map((friend) => (
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
