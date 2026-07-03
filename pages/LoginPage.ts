import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  // 🤖 LevelUp AI Auto-Heal: rule_based (96% confidence)
  username = this.page.locator('[data-test="username"]');
  password = this.page.locator('[data-test="password"]');
  loginBtn = this.page.locator('#login-button');

  async login(user: string, pass: string): Promise<void> {
    this.logger.info(`Logging in as: ${user}`);
    await this.waits.forVisible(this.username);
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
    this.logger.info('Login form submitted');
  }
}
