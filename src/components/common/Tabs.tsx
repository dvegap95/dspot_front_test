import styled from '@emotion/styled';
import React from 'react';

const TabContainer = styled.div`
  .active {
    border-bottom: 2px solid #000000;
    color: #000000;
  }
`;

const StyledTab = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 8px;
  display: inline-block;
  min-width: 65px;
  text-align: center;
  color: #5c5f6b;
  cursor: pointer;
`;

export default function Tabs(
  props: React.HTMLAttributes<HTMLDivElement> & {
    tabs: Array<string>;
    tabValue: string;
    onTabChange: (str: string) => void;
  },
) {
  const { tabs, tabValue, onTabChange } = props;
  return (
    <TabContainer {...(props as React.HTMLAttributes<HTMLDivElement>)}>
      {tabs.map((tab) => (
        <StyledTab
          key={tab}
          onClick={() => onTabChange(tab)}
          className={tab === tabValue ? 'active' : ''}
        >
          {tab}
        </StyledTab>
      ))}
    </TabContainer>
  );
}
