import { expect, Page, Locator } from '@playwright/test';

export class CreditCardResponsePage {
    readonly page: Page;
    readonly alertMessageBox: Locator;
    readonly alertMessageBoxResponse: Locator;
    readonly alertMessageBoxMoreInfo: Locator;
    readonly url: string = '?action=responsecc';

    constructor(page: Page) {
        this.page = page;
        this.alertMessageBox = page.locator('.alert');
        this.alertMessageBoxResponse = page.locator('.response');
        this.alertMessageBoxMoreInfo = page.locator('.more-info');
    }

    async visit(): Promise<void> {
        await this.page.goto(BASE_URL + this.url);
    }

    async isAlertMessageBoxDisplayed(): Promise<void> {
        await expect(this.alertMessageBox).toBeVisible();
    }

    async grabResponseFromAlertBox(): Promise<string | null> {
        return await this.alertMessageBoxResponse.textContent();
    }

    async grabMoreInfoFromAlertBox(): Promise<string | null> {
        return await this.alertMessageBoxMoreInfo.textContent();
    }
}
