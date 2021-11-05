import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectorColumn from "./SelectorColumn";
import ValueList from "../../values.json";
//import "../../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Selector/Column",
  component: SelectorColumn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: 'clicked' }
  },
} as ComponentMeta<typeof SelectorColumn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectorColumn> = (args) => (
  <SelectorColumn {...args} />
);

export const SmallList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmallList.args = {
  title: "Small List",
  content: [
      {"id": "1", "title": "FIRST ITEM"},
      {"id": "2", "title": "SECOND ITEM"},
      {"id": "3", "title": "THIRST ITEM"}],
  multiCol: false,
};

export const LongList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LongList.args = {
  title: "Long List",
  content: ValueList,
  multiCol: true,
};

export const LongListSingle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LongListSingle.args = {
  title: "Long List",
  content: ValueList,
  multiCol: false,
};