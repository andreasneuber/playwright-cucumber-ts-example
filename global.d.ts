import { Browser, BrowserContext, Page } from '@playwright/test';

declare global {
  var browser: Browser;
  var context: BrowserContext;
  var page: Page;
  var BASE_URL: string;
}

export {};
