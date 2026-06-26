import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { getUser } from '../utils/testData';
import { env } from '../utils/env';

/**
 * Verify navigation to Inventory page after successful login
 *
 * Test Case ID: 1217
 * Priority: P0
 */

test.describe('Verify navigation to Inventory page after successful login', () => {
  test('Verify navigation to Inventory page after successful login', async ({ page }) => {
    const user = getUser('standard_user');
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto(env.baseUrl);
    await page.waitForLoadState('domcontentloaded');
    await loginPage.login(user.username, user.password);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText(/Products/i);
    await inventoryPage.verifyInventoryLoaded();
  });
});
