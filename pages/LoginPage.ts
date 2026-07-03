import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  private usernameInput = this.page.locator('#user-name');
  private passwordInput = this.page.locator('#password');
  private loginBtn     = this.page.locator('#login-button');

  async login(user: string, pass: string): Promise<void> {
    this.logger.info(`Logging in as: ${user}`);
    await this.waits.forVisible(this.usernameInput);
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginBtn.click();
    this.logger.info('Login form submitted');
  }
}