import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  // 🤖 LevelUp AI Auto-Heal: rule_based (96% confidence)
  username = this.page.locator('[data-test="username"]');
  // 🤖 LevelUp AI Auto-Heal: rule_based (96% confidence)
  [data-test="password"] = this.page.locator('[data-test="password"]');
  loginBtn = this.page.locator('#login-button');

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.[data-test="password"].fill(pass);
    await this.loginBtn.click();
  }
}
