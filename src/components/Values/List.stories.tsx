import { ComponentStory, ComponentMeta } from "@storybook/react";
import List from "./List";
import ValueList from "../../values.json";
import ValueContextProvider from "../../context/ValueContextProvider" 
//import "../../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Selector/Column",
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => (
  <List {...args} />
);

export const SmallList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmallList.args = {
  title: "Small List",
  content: [
    { id: "1", title: "FIRST ITEM", selected: false },
    { id: "2", title: "SECOND ITEM", selected: false },
    { id: "3", title: "THIRST ITEM", selected: false },
  ],
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
