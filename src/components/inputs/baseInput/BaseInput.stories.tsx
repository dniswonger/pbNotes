import type { Meta, StoryObj } from '@storybook/react';
import BaseInput from './BaseInput';


const meta: Meta<typeof BaseInput> = {
    title: 'Components/Inputs/BaseInput',
    component: BaseInput,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof BaseInput>;

export default meta;
type Story = StoryObj<typeof meta>;

//const onCancel = () => { console.log('cancel') }

export const Desktop: Story = {
    render: (args) => {
        return <BaseInput {...args} />
    },
    args: {
        placeholder: 'Base Example',
    }
};

export const Mobile: Story = {

    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
};
