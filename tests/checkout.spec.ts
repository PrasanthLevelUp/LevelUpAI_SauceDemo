import { test } from '../fixtures/baseFixture';
import { LoginPage } from '../pages/LoginPage';
import { getUser } from '../utils/testData';
import { env } from '../utils/env';

const standardUser = getUser('standard_user');

test('standard user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(env.baseUrl);

  await loginPage.login(
    standardUser.username,
    standardUser.password
  );
});
