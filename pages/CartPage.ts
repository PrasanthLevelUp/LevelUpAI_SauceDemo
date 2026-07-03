import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  private checkoutBtn = this.page.locator('[data-test="checkout"]');

  async checkout(): Promise<void> {
    this.logger.info('Clicking checkout button');
    await this.waits.forVisible(this.checkoutBtn);
    await this.checkoutBtn.click();
    this.logger.info('Checkout initiated');
  }
}