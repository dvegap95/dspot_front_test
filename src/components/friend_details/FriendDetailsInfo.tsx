// information section for friend's detailed view

import styled from '@emotion/styled';
import React from 'react';
import { FriendDetails } from '../../types';

// container card
const Card = styled.div`
  //container
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px;
  gap: 28px;

  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(204, 208, 223, 0.5);
  border-radius: 8px;
`;

// labels for information fields description
const Label = styled.div`
  //text
  font-size: 16px;

  //size
  width: 228px;

  color: #b1b9db;
  //render colon after text
  &::after {
    content: ':';
  }
`;

// biography paragraph
const Bio = styled.div`
  //container
  display: flex;
  align-items: center;

  //size
  margin-top: 10px;
  height: 72px;

  //text
  font-weight: 400;
  font-size: 16px;

  color: #000000;
`;

const Spacer = styled.div`
  width: 98%;
  height: 1px;
  background-color: #b1b9db50;
`;

// container for address-related information section
const AddressInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 14px;
  flex-direction: column;
`;

// row for fields description label and actual information
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

export default function FriendDetailsInfo(
  props: React.HtmlHTMLAttributes<HTMLDivElement> & { friend: FriendDetails },
) {
  const { friend } = props;
  return (
    <Card {...props}>
      <div>
        <Label>Bio</Label>
        <Bio>{friend.bio}</Bio>
      </div>
      <Spacer />
      <Row>
        <Label>Phone</Label>
        <div>{friend.phone}</div>
      </Row>
      <Spacer />
      <AddressInfo>
        <Row>
          <Label>Address</Label>
          <div>{friend.address_1}</div>
        </Row>
        <Row>
          <Label>City</Label>
          <div>{friend.city}</div>
        </Row>
        <Row>
          <Label>State</Label>
          <div>{friend.state}</div>
        </Row>
        <Row>
          <Label>Zipcode</Label>
          <div>{friend.zipcode}</div>
        </Row>
        <Row>
          <Label>State</Label>
          <div>{friend.state}</div>
        </Row>
      </AddressInfo>
    </Card>
  );
}
