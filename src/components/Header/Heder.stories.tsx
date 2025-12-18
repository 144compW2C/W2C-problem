import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import {
    testUserData,
    UserCookieFmt0001VO,
} from '@/models/entity/client/fmt/UserCookieFmt0001VO'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Header',
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

const user: UserCookieFmt0001VO.Type = testUserData

export const Default: Story = {
    args: {
        void: () => {
            // ダミーの関数。クリック時などに呼ばれる想定
            console.log('clicked')
        },
        state: false, // 初期状態
        user,
    },
}
