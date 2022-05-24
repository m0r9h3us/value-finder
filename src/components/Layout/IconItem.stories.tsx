import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomeIcon } from '@heroicons/react/solid';

import { IconItem } from './IconItem';

export default {
  title: 'Layout/IconItem',
  component: IconItem,
} as ComponentMeta<typeof IconItem>;

const Template: ComponentStory<typeof IconItem> = (args) => (
  <IconItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  linkTo: '/',
  Icon: HomeIcon,
};
