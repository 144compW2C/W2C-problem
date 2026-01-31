import { test, expect } from '@playwright/test'

test.describe('ホームページ', () => {
    test('未ログイン時は/loginにリダイレクトされる', async ({ page }) => {
        await page.context().clearCookies()
        await page.goto('/')
        await expect(page).toHaveURL('http://localhost:5173/login')
    })

    test('ページが正常に表示される', async ({ page }) => {
        await page.context().addCookies([
            {
                name: 'W2CToken',
                value: 'e2e-token',
                url: 'http://localhost:5173',
            },
            {
                name: 'user',
                value: encodeURIComponent(
                    JSON.stringify({
                        id: 1,
                        name: 'テスト太郎',
                        email: 'test@example.com',
                        role: 'reviewer',
                        class_name: 'WD2A',
                    }),
                ),
                url: 'http://localhost:5173',
            },
        ])
        await page.goto('/') // この行を上に持っていくとfirefoxだけエラーが出る
        await page.reload()
        await expect(page).toHaveURL('http://localhost:5173/')
        await expect(page.getByText('テスト太郎')).toBeVisible()
    })
})
