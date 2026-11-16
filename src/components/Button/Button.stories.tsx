import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

function InteractiveButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <Button
      label={clicked ? 'Clicked Successfully!' : 'Click Me'}
      backgroundColor="#2563eb"
      disabled={false}
      onClick={() => setClicked(true)}
    />
  );
}

export const Default: Story = {
  render: () => <InteractiveButton />,
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    backgroundColor: '#2563eb',
    disabled: true,
  },
};
