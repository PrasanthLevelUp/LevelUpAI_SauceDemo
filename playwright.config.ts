import { defineConfig } from '@playwright/test';

import 'dotenv/config';


export default defineConfig({
  testDir: './tests',

  use: {
    // baseURL: 'https://www.saucedemo.com',
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  reporter: [
    ['html']
  ]
});