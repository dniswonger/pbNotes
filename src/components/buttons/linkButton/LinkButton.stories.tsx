import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LinkButton from './LinkButton';

const meta: Meta<typeof LinkButton> = {
    title: 'Components/Buttons/LinkButton',
    component: LinkButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: { onClick: fn() },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

    args: {
        children: 'Primary',
    },
};