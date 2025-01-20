import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SecondaryButton from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
    title: 'Components/Buttons/SecondaryButton',
    component: SecondaryButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: { onClick: fn() },
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Primary: Story = {
    args: {
        children: 'Secondary',
    },
};