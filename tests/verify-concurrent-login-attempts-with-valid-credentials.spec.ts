import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getUser } from '../utils/testData';
import { env } from '../utils/env';
import { waits } from '../utils/waits';
import { logger } from '../utils/logger';

/**
 * Verify concurrent login attempts with valid credentials
 *
 * Test Case ID: 1222
 * Priority: P2
 */

test.fixme('Verify concurrent login attempts with valid credentials', async () => {
  const user = getUser('standard_user');
  const browser = await chromium.launch();
  const contextA = await browser.newContext();
  const contextB = await browser.newContext();
  const pageA = await contextA.newPage();
  const pageB = await contextB.newPage();

  const loginPageA = new LoginPage(pageA);
  logger.info('Context A: navigating to base URL');
  await pageA.goto(env.baseUrl);
  await waits.forPageLoad(pageA);
  await loginPageA.login(user.username, user.password);

  const loginPageB = new LoginPage(pageB);
  logger.info('Context B: navigating to base URL');
  await pageB.goto(env.baseUrl);
  await waits.forPageLoad(pageB);
  await loginPageB.login(user.username, user.password);

  logger.info('Asserting both contexts reach inventory page');
  await expect(pageA).toHaveURL(/inventory\.html/);
  await expect(pageB).toHaveURL(/inventory\.html/);
  logger.info('Test passed: concurrent login verified');

  await contextA.close();
  await contextB.close();
  await browser.close();
});
