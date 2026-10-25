import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
};
export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: { children: "HeroImage component" },
};

export const Disabled: Story = {
  args: { children: "HeroImage disabled", disabled: true },
};
