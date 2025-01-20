import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Archive from '../../../assets/images/icon-archive.svg?react';
import BorderButton from './BorderButton';

const meta: Meta<typeof BorderButton> = {
    title: 'Components/Buttons/BorderButton',
    component: BorderButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: { onClick: fn() },
} satisfies Meta<typeof BorderButton>;

export default meta;
type Story = StoryObj<typeof BorderButton>;

export const Primary: Story = {
    args: {
        icon: <Archive />,
        children: 'Archive',
    },
};