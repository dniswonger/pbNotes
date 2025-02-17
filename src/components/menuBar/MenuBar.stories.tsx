import type { Meta, StoryObj } from '@storybook/react';
import MenuBar from './MenuBar';

const meta: Meta<typeof MenuBar> = {
    title: 'Components/MenuBar',
    component: MenuBar,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

//const onCancel = () => { console.log('cancel') }

export const Desktop: Story = {
    args: {

    },
    render: () => (
        <div className="w-[768px]">
            <MenuBar />
        </div>
    )
};

export const Mobile: Story = {
    render: () => (
        <div className="w-[375px]">
            <MenuBar />
        </div>
    ),
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
};
