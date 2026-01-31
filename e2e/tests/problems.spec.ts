import { test, expect } from '@playwright/test'

test.describe('問題一覧', () => {
    test('問題一覧が表示される', async ({ page }) => {
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
        await page.goto('/')
        await page.reload()
        await expect(page.getByRole('link', { name: '問題集' })).toBeVisible()
        await page.getByRole('link', { name: '問題集' }).click()

        await page.goto('/problem')
        await expect(page).toHaveURL('http://localhost:5173/problem')
        await expect(
            page.getByRole('heading', { name: '問題集' }),
        ).toBeVisible()
    })
})
