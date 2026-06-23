import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage{

  firstName = this.page.locator('[data-test="firstName"]');
  lastName = this.page.locator('[data-test="lastName"]');
  postalCode = this.page.locator('[data-test="postalCode"]');

  continueBtn = this.page.locator('[data-test="continue"]');
  finishBtn = this.page.locator('[data-test="finish"]');

  successMessage = this.page.locator('.complete-header');

async enterCheckoutDetails(customer: any) {
  await this.firstName.fill(customer.firstName);
  await this.lastName.fill(customer.lastName);
  await this.postalCode.fill(customer.postalCode);
}

  async completeOrder() {
    await this.continueBtn.click();
    await this.finishBtn.click();
  }

  async verifyOrderSuccess() {
    await expect(this.successMessage).toHaveText('Thank you for your order!');
  }
}