import { test, expect } from '@playwright/test'

test.describe('ホームページ', () => {
    test('ページが正常に表示される', async ({ page }) => {
        await page.goto('/')
    })
})
