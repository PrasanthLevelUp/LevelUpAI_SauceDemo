import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';

/**
 * Verify login with empty username and password fields
 *
 * Test Case ID: 1221
 * Priority: P1
 */

test.describe('Verify login with empty username and password fields', () => {
  test('Verify login with empty username and password fields', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto(env.baseUrl);
    await page.waitForLoadState('domcontentloaded');
    await loginPage.login('', '');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('is required');
  });
});
