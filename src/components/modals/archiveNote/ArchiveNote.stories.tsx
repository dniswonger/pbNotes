import type { Meta, StoryObj } from '@storybook/react';
import ArchiveNote from './ArchiveNote';

const meta: Meta<typeof ArchiveNote> = {
    title: 'Components/Modals/ArchiveNote',
    component: ArchiveNote,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ArchiveNote>;

export default meta;
type Story = StoryObj<typeof ArchiveNote>;

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
