// standard controlled tabs component
// todo decorate selected with an independent element instead of with border-bottom in
// todo order to perform animations
import styled from '@emotion/styled';
import React from 'react';

// wrapper for the tabs
const TabContainer = styled.div`
  //class to apply to the currently active tab
  .active {
    border-bottom: 2px solid #000000;
    color: #000000;
  }
`;

// actual tab element
const StyledTab = styled.div`
  //text
  font-size: 16px;
  text-align: center;

  //size
  display: inline-block;
  padding-bottom: 8px;
  min-width: 65px;

  color: #5c5f6b;
  cursor: pointer;
`;

export default function Tabs(
  // extend div propTypes for props pass-through
  props: React.HTMLAttributes<HTMLDivElement> & {
    tabs: Array<string>; // array containing tab values|text as string
    tabValue: string; // current value of the tab
    onTabChange: (str: string) => void; // tab change callback
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
