import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

  private inventoryList = this.page.locator('.inventory_list');
  private addBackpack   = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  private cartIcon      = this.page.locator('.shopping_cart_link');

  async addProductToCart(): Promise<void> {
    this.logger.info('Adding Sauce Labs Backpack to cart');
    await this.waits.forVisible(this.addBackpack);
    await this.addBackpack.click();
    this.logger.info('Product added to cart');
  }

  async openCart(): Promise<void> {
    this.logger.info('Opening shopping cart');
    await this.waits.forVisible(this.cartIcon);
    await this.cartIcon.click();
    this.logger.info('Cart opened');
  }

  async verifyInventoryLoaded(): Promise<void> {
    this.logger.info('Verifying inventory page is loaded');
    await this.waits.forVisible(this.inventoryList);
    await expect(this.inventoryList).toBeVisible();
    this.logger.info('Inventory page verified');
  }
}