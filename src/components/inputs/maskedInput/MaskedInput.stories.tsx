import type { Meta, StoryObj } from '@storybook/react';
import MaskedInput from './MaskedInput';


const meta: Meta<typeof MaskedInput> = {
    title: 'Components/Inputs/MaskedInput',
    component: MaskedInput,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof MaskedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

//const onCancel = () => { console.log('cancel') }

export const Desktop: Story = {
    render: (args) => {
        return <MaskedInput {...args} />
    },
    args: {
        label: 'Password',
        placeholder: 'Password',
        infoText: 'Password must be at least 8 characters long',
        isErrored: true,
        disabled: false,
    }
};

export const Mobile: Story = {

    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
};
