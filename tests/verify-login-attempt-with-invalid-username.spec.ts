import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getUser } from '../utils/testData';
import { env } from '../utils/env';
import { waits } from '../utils/waits';
import { logger } from '../utils/logger';

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

    logger.info('Navigating to base URL');
    await page.goto(env.baseUrl);
    await waits.forPageLoad(page);

    await loginPage.login('invalid_user', validUser.password);

    logger.info('Asserting invalid credentials error message');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('do not match');
    logger.info('Test passed: invalid username error verified');
  });
});
