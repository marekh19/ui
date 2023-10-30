// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

import "../../index.css";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Hello World!",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
  },
};
