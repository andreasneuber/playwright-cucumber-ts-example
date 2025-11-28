import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CelsiusToFahrenheitPage extends BasePage {
    readonly celsiusInput: Locator;
    readonly convertButton: Locator;
    readonly fahrenheitInput: Locator;
    protected readonly url: string = '?action=form6';

    constructor(page: Page) {
        super(page);
        this.celsiusInput = page.locator('//input[@name="celsius"]');
        this.convertButton = page.locator('#btnCelsius');
        this.fahrenheitInput = page.locator('//input[@name="fahrenheit"]');
    }

    async provideCelsius(celsiusDegrees: string): Promise<void> {
        await this.celsiusInput.fill(celsiusDegrees);
    }

    async clickConvert(): Promise<void> {
        await this.convertButton.click();
    }

    async readFahrenheitField(): Promise<string> {
        const value = await this.fahrenheitInput.getAttribute('value');
        if (value === null) throw new Error('Fahrenheit field value not found');
        return value;
    }
}
