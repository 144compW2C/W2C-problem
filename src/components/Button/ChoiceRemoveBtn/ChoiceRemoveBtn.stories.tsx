import type { Meta, StoryObj } from '@storybook/react-vite'

import ChoiceRemoveBtn from './ChoiceRemoveBtn'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Button/ChoiceRemoveBtn',
    component: ChoiceRemoveBtn,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof ChoiceRemoveBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        void: () => console.log('Remove button clicked!'),
    },
}
