import { Page, expect } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  firstName = this.page.locator('[data-test="firstName"]');
  lastName = this.page.locator('[data-test="lastName"]');
  postalCode = this.page.locator('[data-test="postalCode"]');

  continueBtn = this.page.locator('[data-test="continue"]');
  finishBtn = this.page.locator('[data-test="finish"]');

  successMessage = this.page.locator('.complete-header');

  async enterCheckoutDetails() {
    await this.firstName.fill('Prasanth');
    await this.lastName.fill('K');
    await this.postalCode.fill('600001');
  }

  async completeOrder() {
    await this.continueBtn.click();
    await this.finishBtn.click();
  }

  async verifyOrderSuccess() {
    await expect(this.successMessage).toHaveText('Thank you for your order!');
  }
}