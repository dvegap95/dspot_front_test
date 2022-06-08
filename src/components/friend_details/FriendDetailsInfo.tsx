import styled from '@emotion/styled';
import React from 'react';
import { FriendDetails } from '../../types';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px;
  gap: 28px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(204, 208, 223, 0.5);
  border-radius: 8px;
`;

const Label = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 228px;
  color: #b1b9db;
  &::after {
    content: ':';
  }
`;

const Bio = styled.div`
  height: 72px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 10px;
`;

const Spacer = styled.div`
  width: 98%;
  height: 1px;
  background-color: #b1b9db50;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

const AddressInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 14px;
  flex-direction: column;
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
