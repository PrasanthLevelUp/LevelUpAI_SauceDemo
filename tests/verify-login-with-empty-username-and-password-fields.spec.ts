import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';
import { waits } from '../utils/waits';
import { logger } from '../utils/logger';

/**
 * Verify login with empty username and password fields
 *
 * Test Case ID: 1221
 * Priority: P1
 */

test.describe('Verify login with empty username and password fields', () => {
  test('Verify login with empty username and password fields', async ({ page }) => {
    const loginPage = new LoginPage(page);

    logger.info('Navigating to base URL');
    await page.goto(env.baseUrl);
    await waits.forPageLoad(page);

    await loginPage.login('', '');

    logger.info('Asserting required field error message');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('is required');
    logger.info('Test passed: empty fields error verified');
  });
});
