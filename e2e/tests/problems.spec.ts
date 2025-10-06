import { test, expect } from '@playwright/test'

test.describe('問題一覧', () => {
    test('問題一覧が表示される', async ({ page }) => {
        await page.goto('/problems')

        await expect(page.locator('h2')).toContainText('問題集')
        await expect(page.locator('.problemsTable')).toBeVisible()
    })
})
