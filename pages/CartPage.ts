import { Page } from '@playwright/test';

export class CartPage {

  constructor(private page: Page) {}

  checkoutBtn = this.page.locator('[data-test="checkout"]');

  async checkout() {
    await this.checkoutBtn.click();
  }
}