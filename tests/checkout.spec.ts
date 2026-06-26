import { test, expect } from '../fixtures/baseFixture';
import { getUser, getRecord } from '../utils/testData';
import { env } from '../utils/env';
import checkoutData from '../data/checkout_data.json';

test('standard user can complete checkout', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
  const standardUser = getUser('standard_user');
  const customer = getRecord<{ firstName: string; lastName: string; postalCode: string }>(
    checkoutData,
    'customer1'
  );

  await page.goto(env.baseUrl);
  await loginPage.login(standardUser.username, standardUser.password);
  await inventoryPage.verifyInventoryLoaded();
  await inventoryPage.addProductToCart();
  await inventoryPage.openCart();
  await cartPage.checkout();
  await checkoutPage.enterCheckoutDetails(customer);
  await checkoutPage.completeOrder();
  await checkoutPage.verifyOrderSuccess();
});
