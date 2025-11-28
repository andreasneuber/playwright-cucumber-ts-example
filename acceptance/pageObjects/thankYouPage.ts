import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class ThankYouPage extends BasePage {
    readonly thankYouMessageHeader: Locator;
    protected readonly url: string = '?action=thankYou';

    constructor(page: Page) {
        super(page);
        this.thankYouMessageHeader = page.locator('h2');
    }

    async grabThankYouMessage(): Promise<string> {
        const text = await this.thankYouMessageHeader.textContent();
        if (!text) throw new Error('Thank you message not found');
        return text;
    }
}
