import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PrimaryButton from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
    title: 'Components/Buttons/PrimaryButton',
    component: PrimaryButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {

    args: {
        children: 'Primary',
    },
};