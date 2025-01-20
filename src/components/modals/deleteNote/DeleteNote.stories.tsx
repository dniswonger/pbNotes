import type { Meta, StoryObj } from '@storybook/react';
import DeleteNote from './DeleteNote';

const meta: Meta<typeof DeleteNote> = {
    title: 'Components/Modals/DeleteNote',
    component: DeleteNote,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof DeleteNote>;

export default meta;
type Story = StoryObj<typeof DeleteNote>;

const onCancel = () => { console.log('cancel') }

export const Desktop: Story = {
    args: {

    }
};

export const Mobile: Story = {

    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
};
