import { test, expect } from '@playwright/test'

test.describe('ホームページ', () => {
    test('ページが正常に表示される', async ({ page }) => {
        await page.goto('/')
        await expect(page).toHaveTitle(/W2C Problem/)
        await expect(page.locator('h1')).toBeVisible()
    })

    test('ナビゲーションメニューが機能する', async ({ page }) => {
        await page.goto('/')
        await page.click('text=問題集')
        await expect(page).toHaveURL(/.*problems/)
    })
})
