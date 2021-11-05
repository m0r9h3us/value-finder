import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Selector } from './Selector';
import ValueList from '../../values.json'
import '../../index.css';

export default {
  title: 'Prioritizer/Selector',
  component: Selector,
} as ComponentMeta<typeof Selector>;

const Template: ComponentStory<typeof Selector> = (args) => <Selector {...args} />;

export const ValueListStory = Template.bind({});
ValueListStory.args = {
  nbOfElements: 10,
  list: ValueList,
};