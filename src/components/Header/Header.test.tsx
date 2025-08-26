import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Header from './Header'
import styles from './style.module.css'

// テスト用のWrapper
const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>{children}</BrowserRouter>
)

describe('Header', () => {
    it('should render header elements correctly', () => {
        render(<Header />, { wrapper: Wrapper })

        // ヘッダーが表示されていることを確認
        const header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()

        // ハンバーガーメニューボタンが存在することを確認
        const hamburgerButton = screen.getByAltText('ハンバーガー')
        expect(hamburgerButton).toBeInTheDocument()

        // アイコン画像が存在することを確認
        const iconImage = screen.getByAltText('アイコン画像')
        expect(iconImage).toBeInTheDocument()
    })

    it('should render navigation links', () => {
        render(<Header />, { wrapper: Wrapper })

        // ナビゲーションリンクが存在することを確認
        expect(screen.getByText('ホーム')).toBeInTheDocument()
        expect(screen.getByText('問題集')).toBeInTheDocument()
        expect(screen.getByText('問題作成')).toBeInTheDocument()
        expect(screen.getByText('運営管理')).toBeInTheDocument()
    })

    it('should toggle hamburger menu on click', () => {
        render(<Header />, { wrapper: Wrapper })

        const hamburgerButton = screen.getByAltText('ハンバーガー')
        const nav = screen.getByRole('navigation').parentElement

        // 初期状態では開いていない
        expect(nav).not.toHaveClass(styles.hamburgerOpen)

        // クリックして開く
        fireEvent.click(hamburgerButton)
        expect(nav).toHaveClass(styles.hamburgerOpen)

        // もう一度クリックして閉じる
        fireEvent.click(hamburgerButton)
        expect(nav).not.toHaveClass(styles.hamburgerOpen)
    })
})
