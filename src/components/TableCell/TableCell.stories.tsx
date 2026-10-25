import type { Meta, StoryObj } from "@storybook/react";
import { TableCell } from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Components/TableCell",
  component: TableCell,
};
export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: { children: "TableCell component" },
};

export const Disabled: Story = {
  args: { children: "TableCell disabled", disabled: true },
};
