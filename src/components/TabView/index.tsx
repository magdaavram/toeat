import React from 'react';
import styled from 'styled-components';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { IRecipe, Unit } from 'api/recipes';
import SelectDropdown from 'components/Dropdown/SelectDropdown';
import { Option } from 'components/Dropdown';
import List from 'components/List';

interface Ingredient {
  ingredient: string;
  quantity: number;
  unit: Unit;
}

const TabsContainer = styled(Tabs)`
  max-width: 900px;
`;

const InfoTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  margin-bottom: 0;
  padding: 0 45px;
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
    border-bottom: 4px solid var(--color--beige);
    border-radius: 3px 3px 0 0;
  }
`;

const InfoTabPanel = styled.div`
  padding: 36px;
  border: 2px solid var(--color--light-purple);
`;

const servingOptions: Option[] = Array.from({ length: 25 }, (value: undefined, index: number) => {
  return { value: index + 1, label: `${index + 1} ${index + 1 === 1 ? 'serving' : 'servings'}` };
});

const TabView = (props: IRecipe) => {
  const { servings, ingredients, equipment, preparation } = props;

  return (
    <TabsContainer>
      <InfoTabList>
        <InfoTab>Ingredients</InfoTab>
        <InfoTab>Equipment</InfoTab>
        <InfoTab>Preparation</InfoTab>
      </InfoTabList>

      <TabPanel>
        <InfoTabPanel>
          <SelectDropdown width={'300px'} selected={servings} options={servingOptions} />
          <List
            items={ingredients}
            renderItem={(ingredient: Ingredient) =>
              `${ingredient.quantity} ${ingredient.unit} of ${ingredient.ingredient}`
            }
          />
        </InfoTabPanel>
      </TabPanel>
      <TabPanel>
        <InfoTabPanel>
          <List items={equipment} renderItem={(equipment: string) => equipment} />
        </InfoTabPanel>
      </TabPanel>
      <TabPanel>
        <InfoTabPanel>{preparation}</InfoTabPanel>
      </TabPanel>
    </TabsContainer>
  );
};

export default TabView;
