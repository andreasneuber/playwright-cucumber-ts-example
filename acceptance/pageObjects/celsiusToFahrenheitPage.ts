import { expect, Page, Locator } from '@playwright/test';

export class CelsiusToFahrenheitPage {
    readonly page: Page;
    readonly celsiusInput: Locator;
    readonly convertButton: Locator;
    readonly fahrenheitInput: Locator;
    readonly url: string = '?action=form6';

    constructor(page: Page) {
        this.page = page;
        this.celsiusInput = page.locator('//input[@name="celsius"]');
        this.convertButton = page.locator('#btnCelsius');
        this.fahrenheitInput = page.locator('//input[@name="fahrenheit"]');
    }

    async visit(): Promise<void> {
        await this.page.goto(BASE_URL + this.url);
    }

    async provideCelsius(celsiusDegrees: string): Promise<void> {
        await this.celsiusInput.fill(celsiusDegrees);
    }

    async clickConvert(): Promise<void> {
        await this.convertButton.click();
    }

    async readFahrenheitField(): Promise<string | null> {
        return this.fahrenheitInput.getAttribute('value');
    }
}
