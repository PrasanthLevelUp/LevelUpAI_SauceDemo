import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  checkoutBtn = this.page.locator('[data-test="checkout"]');

  async checkout() {
    await this.checkoutBtn.click();
  }
}