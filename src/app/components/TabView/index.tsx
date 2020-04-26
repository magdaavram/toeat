import React from 'react';
import styled from 'styled-components';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { IRecipe } from '../../api/recipes';

const InfoTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
`;

const InfoTab = styled(Tab)`
  position: relative;
  top: 3px;
  left: 0;
  width: 250px;
  text-align: center;
  padding: 6px 0;
  font-size: var(--font-size--large);
  outline: none;

  &[aria-selected='true'] {
    font-weight: 700;
    border: 2px solid var(--color--light-purple);
    border-bottom: 3px solid var(--color--beige);
    border-radius: 3px 3px 0 0;
  }
`;

const InfoTabPanel = styled.div`
  padding: 36px;
  border: 2px solid var(--color--light-purple);
`;

const TabView = (props: IRecipe) => {
  return (
    <Tabs defaultIndex={1}>
      <InfoTabList>
        <InfoTab>Ingredients</InfoTab>
        <InfoTab>Preparation</InfoTab>
      </InfoTabList>

      <TabPanel>
        <InfoTabPanel>
          <p>Ingredients list</p>
        </InfoTabPanel>
      </TabPanel>
      <TabPanel>
        <InfoTabPanel>{props.preparation}</InfoTabPanel>
      </TabPanel>
    </Tabs>
  );
};

export default TabView;
