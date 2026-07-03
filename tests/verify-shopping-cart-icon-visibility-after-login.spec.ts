import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getUser } from '../utils/testData';
import { env } from '../utils/env';
import { waits } from '../utils/waits';
import { logger } from '../utils/logger';

/**
 * Verify shopping cart icon visibility after login
 *
 * Test Case ID: 1218
 * Priority: P1
 */

test.describe('Verify shopping cart icon visibility after login', () => {
  test('Verify shopping cart icon visibility after login', async ({ page }) => {
    const user = getUser('standard_user');
    const loginPage = new LoginPage(page);

    logger.info('Navigating to base URL');
    await page.goto(env.baseUrl);
    await waits.forPageLoad(page);

    await loginPage.login(user.username, user.password);

    logger.info('Asserting cart icon and page title visibility');
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
    await expect(page.locator('[data-test="title"]')).toHaveText(/Products/i);
    logger.info('Test passed: cart icon visible after login');
  });
});
