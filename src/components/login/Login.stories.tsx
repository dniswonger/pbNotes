import type { Meta, StoryObj } from '@storybook/react';
import Login from './Login';


const meta: Meta<typeof Login> = {
    title: 'Components/Login',
    component: Login,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

//const onCancel = () => { console.log('cancel') }

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
