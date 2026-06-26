import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getUser } from '../utils/testData';
import { env } from '../utils/env';

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
  await pageA.goto(env.baseUrl);
  await pageA.waitForLoadState('domcontentloaded');
  await loginPageA.login(user.username, user.password);

  const loginPageB = new LoginPage(pageB);
  await pageB.goto(env.baseUrl);
  await pageB.waitForLoadState('domcontentloaded');
  await loginPageB.login(user.username, user.password);

  await expect(pageA).toHaveURL(/inventory\.html/);
  await expect(pageB).toHaveURL(/inventory\.html/);

  await contextA.close();
  await contextB.close();
  await browser.close();
});
