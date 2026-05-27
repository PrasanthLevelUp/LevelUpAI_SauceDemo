import { Page, expect } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) {}

  addBackpack = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  cartIcon = this.page.locator('.shopping_cart_link');

  async addProductToCart() {
    await this.addBackpack.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async verifyInventoryLoaded() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}