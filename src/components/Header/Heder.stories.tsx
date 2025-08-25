import type { Meta, StoryObj } from '@storybook/react-vite'

import Header from './Header'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextTrack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
