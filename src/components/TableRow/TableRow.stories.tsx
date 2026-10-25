import type { Meta, StoryObj } from "@storybook/react";
import { TableRow } from "./TableRow";

const meta: Meta<typeof TableRow> = {
  title: "Components/TableRow",
  component: TableRow,
};
export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: { children: "TableRow component" },
};

export const Disabled: Story = {
  args: { children: "TableRow disabled", disabled: true },
};
