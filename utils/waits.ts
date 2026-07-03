import { Page, Locator } from '@playwright/test';

export const TIMEOUTS = {
  short:   5_000,
  default: 10_000,
  long:    30_000,
} as const;

export const waits = {
  forPageLoad: (page: Page): Promise<void> =>
    page.waitForLoadState('domcontentloaded'),

  forNetworkIdle: (page: Page): Promise<void> =>
    page.waitForLoadState('networkidle'),

  forVisible: (locator: Locator, timeout = TIMEOUTS.default): Promise<void> =>
    locator.waitFor({ state: 'visible', timeout }),

  forHidden: (locator: Locator, timeout = TIMEOUTS.default): Promise<void> =>
    locator.waitFor({ state: 'hidden', timeout }),

  forURL: (page: Page, pattern: string | RegExp, timeout = TIMEOUTS.default): Promise<void> =>
    page.waitForURL(pattern, { timeout }),
};
