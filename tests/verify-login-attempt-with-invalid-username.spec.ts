import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getUser } from '../utils/testData';
import { env } from '../utils/env';

/**
 * Verify login attempt with invalid username
 *
 * Test Case ID: 1219
 * Priority: P0
 */

test.describe('Verify login attempt with invalid username', () => {
  test('Verify login attempt with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const validUser = getUser('standard_user');

    await page.goto(env.baseUrl);
    await page.waitForLoadState('domcontentloaded');
    await loginPage.login('invalid_user', validUser.password);

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('do not match');
  });
});
