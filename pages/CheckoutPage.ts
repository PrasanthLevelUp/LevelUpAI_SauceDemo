import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

type Customer = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage extends BasePage {

  private firstNameInput  = this.page.locator('[data-test="firstName"]');
  private lastNameInput   = this.page.locator('[data-test="lastName"]');
  private postalCodeInput = this.page.locator('[data-test="postalCode"]');
  private continueBtn     = this.page.locator('[data-test="continue"]');
  private finishBtn       = this.page.locator('[data-test="finish"]');
  private successMessage  = this.page.locator('.complete-header');

  async enterCheckoutDetails(customer: Customer): Promise<void> {
    this.logger.info(`Entering checkout details for: ${customer.firstName} ${customer.lastName}`);
    await this.waits.forVisible(this.firstNameInput);
    await this.firstNameInput.fill(customer.firstName);
    await this.lastNameInput.fill(customer.lastName);
    await this.postalCodeInput.fill(customer.postalCode);
    this.logger.info('Checkout details entered');
  }

  async completeOrder(): Promise<void> {
    this.logger.info('Completing order — clicking Continue');
    await this.waits.forVisible(this.continueBtn);
    await this.continueBtn.click();
    this.logger.info('Clicking Finish');
    await this.waits.forVisible(this.finishBtn);
    await this.finishBtn.click();
    this.logger.info('Order submitted');
  }

  async verifyOrderSuccess(): Promise<void> {
    this.logger.info('Verifying order success message');
    await this.waits.forVisible(this.successMessage);
    await expect(this.successMessage).toHaveText('Thank you for your order!');
    this.logger.info('Order success confirmed');
  }
}