import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete Checkout Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await page.goto('/');

  // Login
  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  // Verify Inventory
  await inventoryPage.verifyInventoryLoaded();

  // Add Product
  await inventoryPage.addProductToCart();

  // Open Cart
  await inventoryPage.openCart();

  // Checkout
  await cartPage.checkout();

  // Enter Details
  await checkoutPage.enterCheckoutDetails();

  // Complete Order
  await checkoutPage.completeOrder();

  // Verify Success
  await checkoutPage.verifyOrderSuccess();
});