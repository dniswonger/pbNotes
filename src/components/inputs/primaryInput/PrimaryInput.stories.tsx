import type { Meta, StoryObj } from '@storybook/react';
import PrimaryInput from './PrimaryInput';

const meta: Meta<typeof PrimaryInput> = {
  title: 'Components/Inputs/PrimaryInput',
  component: PrimaryInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PrimaryInput>;

export default meta;
type Story = StoryObj<typeof meta>;

//const onCancel = () => { console.log('cancel') }

export const Desktop: Story = {
  render: (args) => {
    return <PrimaryInput {...args} />;
  },
  args: {
    label: 'Email Address',
    placeholder: 'Email',
    infoText: 'Please enter your email address',
    isErrored: true,
    disabled: false,
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
