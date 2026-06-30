import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  username = this.page.locator('[data-test="username"]');
  password = this.page.locator('[data-test="password"]');
  loginBtn = this.page.locator('#login-button');

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
