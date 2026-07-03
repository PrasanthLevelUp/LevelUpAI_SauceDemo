import { Page } from '@playwright/test';
import { logger } from '../utils/logger';
import { waits } from '../utils/waits';

export class BasePage {
  protected readonly logger = logger;
  protected readonly waits = waits;

  constructor(protected page: Page) {}

  async navigate(url: string): Promise<void> {
    this.logger.info(`Navigating to: ${url}`);
    await this.page.goto(url);
    await this.waits.forPageLoad(this.page);
    this.logger.info(`Page loaded: ${url}`);
  }
}