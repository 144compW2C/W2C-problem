import type { Meta, StoryObj } from '@storybook/react-vite'

import ChoiceAddBtn from './ChoiceAddBtn'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Button/ChoiceAddBtn',
    component: ChoiceAddBtn,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof ChoiceAddBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        void: () => console.log('Add button clicked!'),
    },
}
