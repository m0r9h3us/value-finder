import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Selector from "./Selector";
import ValueList from "../../values.json";
import "../../index.css";
import ValueContextProvider from "../../context/ValueContextProvider";

export default {
  title: "Selector/Selector",
  component: Selector,
  decorators: [
    (Story) => (
      <ValueContextProvider items={ValueList} nbOfSelectableElements={10}>
        <Story />
      </ValueContextProvider>
    ),
  ],
} as ComponentMeta<typeof Selector>;

const Template: ComponentStory<typeof Selector> = (args) => <Selector {...args} />;

export const Default = Template.bind({});
Default.args = {
  absoluteHeight: true,
};
