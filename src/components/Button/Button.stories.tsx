
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click Me",
    backgroundColor: "#2563eb",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    backgroundColor: "#2563eb",
    disabled: true,
  },
};
