import { defineConfig } from '@playwright/test';

import 'dotenv/config';


export default defineConfig({
  testDir: './tests',

  use: {
    // baseURL: 'https://www.saucedemo.com',
    baseURL: process.env.BASE_URL,
    // Run headless by default so CI / unattended runners (no X server) work.
    // Set HEADED=1 locally to watch the browser.
    headless: process.env.HEADED !== '1',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  // Emit machine-readable results (test-results.json) for artifact collection
  // in addition to the human-friendly HTML report.
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results.json' }]
  ]
});
