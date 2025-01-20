import type { Meta, StoryObj } from '@storybook/react';
import ActionModal from './ActionModal';
import PrimaryButton from '@/components/buttons/primaryButton/PrimaryButton';
import SecondaryButton from '@/components/buttons/secondaryButton/SecondaryButton';
import Archive from '../../../assets/images/icon-archive.svg?react';

const meta: Meta<typeof ActionModal> = {
    title: 'Components/Modals/ActionModal',
    component: ActionModal,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ActionModal>;

export default meta;
type Story = StoryObj<typeof ActionModal>;

const onCancel = () => { console.log('cancel') }

export const Desktop: Story = {
    args: {
        title: 'Desktop Modal',
        description: 'example description for desktop modal',
        icon: <Archive />,
        actionButton: <PrimaryButton onClick={() => { console.log('testytest') }}>Archive</PrimaryButton>,
        cancelButton: <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
    }
};

export const Mobile: Story = {
    args: {
        title: 'Mobile Modal',
        description: 'example description for mobile modal',
        icon: <Archive />,
        actionButton: <PrimaryButton onClick={() => { console.log('testytest') }}>Cancel</PrimaryButton>,
        cancelButton: <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
};
