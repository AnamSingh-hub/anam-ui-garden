import type { Meta, StoryObj } from "@storybook/react";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
};
export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: { children: "Img component" },
};

export const Disabled: Story = {
  args: { children: "Img disabled", disabled: true },
};
