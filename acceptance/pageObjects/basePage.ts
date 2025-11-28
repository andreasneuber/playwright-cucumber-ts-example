import { Page } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;
    protected abstract readonly url: string;

    constructor(page: Page) {
        this.page = page;
    }

    async visit(): Promise<void> {
        await this.page.goto(BASE_URL + this.url);
    }
}
