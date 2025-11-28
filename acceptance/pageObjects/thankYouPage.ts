import { expect, Page, Locator } from '@playwright/test';

export class ThankYouPage {
    readonly page: Page;
    readonly thankYouMessageHeader: Locator;
    readonly url: string = '?action=thankYou';

    constructor(page: Page) {
        this.page = page;
        this.thankYouMessageHeader = page.locator('h2');
    }

    async visit(): Promise<void> {
        await this.page.goto(BASE_URL + this.url);
    }

    async grabThankYouMessage(): Promise<string | null> {
        return await this.thankYouMessageHeader.textContent();
    }
}
