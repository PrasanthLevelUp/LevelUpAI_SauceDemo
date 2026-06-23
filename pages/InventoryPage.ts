import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

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