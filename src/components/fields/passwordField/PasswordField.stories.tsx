import type { Meta, StoryObj } from '@storybook/react';
import PasswordField from './PasswordField';


const meta: Meta<typeof PasswordField> = {
    title: 'Components/fields/PasswordField',
    component: PasswordField,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

//const onCancel = () => { console.log('cancel') }

export const Desktop: Story = {
    render: (args) => {
        return <PasswordField {...args} />
    },
    args: {
        label: 'Password',
        placeholder: 'Password',
        infoText: 'Password must be at least 8 characters long',
        isErrored: true,
        disabled: false,
        onForgotPassword: () => { }
    }
};

export const Mobile: Story = {

    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
};
