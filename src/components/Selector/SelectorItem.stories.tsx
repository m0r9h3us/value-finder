import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectorItem from "./SelectorItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Selector/Item",
  component: SelectorItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: 'clicked' }
  },
} as ComponentMeta<typeof SelectorItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectorItem> = (args) => (
  <SelectorItem {...args} />
);

export const HoverGreen = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HoverGreen.args = {
  item: { id: "1", title: "ITEM" },
  hoverColor: "green",
};

export const HoverRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

HoverRed.args = {
  item: { id: "1", title: "ITEM" },
  hoverColor: "red",
};
