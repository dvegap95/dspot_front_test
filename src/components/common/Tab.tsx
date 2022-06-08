import styled from '@emotion/styled';
import React from 'react';

const TabContainer = styled.div``;
const StyledTab = styled.div`
  color: ${(props: { selected?: boolean }) =>
    props.selected ? 'orange' : 'inherit'};
`;

export default function Tab(props: {
  tabs: Array<string>;
  value: string;
  onChange: (str: string) => void;
}) {
  const { tabs, value, onChange } = props;
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <StyledTab
          selected={tab === value}
          key={tab}
          onClick={() => onChange(tab)}
        >
          {tab}
        </StyledTab>
      ))}
    </TabContainer>
  );
}
