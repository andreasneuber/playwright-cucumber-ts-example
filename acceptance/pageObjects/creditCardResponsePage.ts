import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CreditCardResponsePage extends BasePage {
    readonly alertMessageBox: Locator;
    readonly alertMessageBoxResponse: Locator;
    readonly alertMessageBoxMoreInfo: Locator;
    protected readonly url: string = '?action=responsecc';

    constructor(page: Page) {
        super(page);
        this.alertMessageBox = page.locator('.alert');
        this.alertMessageBoxResponse = page.locator('.response');
        this.alertMessageBoxMoreInfo = page.locator('.more-info');
    }

    async isAlertMessageBoxDisplayed(): Promise<boolean> {
        return await this.alertMessageBox.isVisible();
    }

    async grabResponseFromAlertBox(): Promise<string> {
        const text = await this.alertMessageBoxResponse.textContent();
        if (!text) throw new Error('Alert response text not found');
        return text;
    }

    async grabMoreInfoFromAlertBox(): Promise<string> {
        const text = await this.alertMessageBoxMoreInfo.textContent();
        if (!text) throw new Error('Alert more info text not found');
        return text;
    }
}
