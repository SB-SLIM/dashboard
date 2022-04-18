import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../src/App/ui-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,

  args: {
    variant: "contained",
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "contained",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Button",
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  children: "Button",
};
