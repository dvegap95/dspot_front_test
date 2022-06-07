import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Row from "../components/FriendRow";
import { Friend } from "../types";
import custom_axios from "../utils/custom_axios";

const endpoint = "http://private-5bdb3-friendmock.apiary-mock.com/friends";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default function FriendList() {
  const [friends, setFriends] = useState([] as Array<Friend>);

  function getData() {
    custom_axios.get(endpoint).then((resp) => {
      setFriends(resp.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container >
      {friends.map((friend) => (
        <Row friend={friend} key={friend.id}/>
      ))}
    </Container>
  );
}
