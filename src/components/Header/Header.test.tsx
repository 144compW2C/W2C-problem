import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Header from './Header'
import {
    testUserData,
    UserCookieFmt0001VO,
} from '@/models/entity/client/fmt/UserCookieFmt0001VO'

// テスト用のWrapper
const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>{children}</BrowserRouter>
)
const user: UserCookieFmt0001VO.Type = testUserData

describe('Header', () => {
    it('should render header elements correctly', () => {
        render(
            <Header
                void={() => console.log('テスト')}
                state={true}
                user={user}
            />,
            {
                wrapper: Wrapper,
            },
        )
        // ヘッダーが表示されていることを確認
        const header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()
    })
    it('should render navigation links for reviewer', () => {
        render(
            <Header
                void={() => console.log('テスト')}
                state={true}
                user={user}
            />,
            {
                wrapper: Wrapper,
            },
        )
        // ナビゲーションリンクが存在することを確認
        expect(screen.getByText('ホーム')).toBeInTheDocument()
        expect(screen.getByText('問題集')).toBeInTheDocument()
        expect(screen.getByText('問題作成')).toBeInTheDocument()
        expect(screen.getByText('運営管理')).toBeInTheDocument()
    })
})
