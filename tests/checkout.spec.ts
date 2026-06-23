import { test } from '../fixtures/baseFixture';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';

test('standard user can log in', async ({ page, standardUser }) => {
  const loginPage = new LoginPage(page);

  await page.goto(env.baseUrl);

  await loginPage.login(
    standardUser.username,
    standardUser.password
  );
});
