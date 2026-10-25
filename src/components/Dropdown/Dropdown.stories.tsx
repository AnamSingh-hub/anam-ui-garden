import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: { children: "Dropdown component" },
};

export const Disabled: Story = {
  args: { children: "Dropdown disabled", disabled: true },
};
