import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class ProvideYourDetailsPage extends BasePage {
    readonly inputFirstname: Locator;
    readonly inputLastname: Locator;
    readonly inputStreet: Locator;
    readonly inputCity: Locator;
    readonly inputZipCode: Locator;
    readonly inputState: Locator;
    readonly inputCountry: Locator;
    readonly inputMobilePhoneNumber: Locator;
    readonly inputHomePhoneNumber: Locator;
    readonly inputEmail: Locator;
    readonly buttonSubmitInfo: Locator;
    protected readonly url: string = '?action=form1';

    constructor(page: Page) {
        super(page);
        this.inputFirstname = page.locator('#fname');
        this.inputLastname = page.locator('#lname');
        this.inputStreet = page.locator('#street');
        this.inputCity = page.locator('#city');
        this.inputZipCode = page.locator('#zip');
        this.inputState = page.locator('#state');
        this.inputCountry = page.locator('#country');
        this.inputMobilePhoneNumber = page.locator('#mobile');
        this.inputHomePhoneNumber = page.locator('#home');
        this.inputEmail = page.locator('#email');
        this.buttonSubmitInfo = page.locator('#submit-info');
    }

    async provideFirstname(firstName: string): Promise<void> {
        await this.inputFirstname.fill(firstName);
    }

    async provideLastName(lastName: string): Promise<void> {
        await this.inputLastname.fill(lastName);
    }

    async provideStreet(street: string): Promise<void> {
        await this.inputStreet.fill(street);
    }

    async provideCity(city: string): Promise<void> {
        await this.inputCity.fill(city);
    }

    async provideZip(zipCode: string): Promise<void> {
        await this.inputZipCode.fill(zipCode);
    }

    async provideState(state: string): Promise<void> {
        await this.inputState.fill(state);
    }

    async provideCountry(country: string): Promise<void> {
        await this.inputCountry.fill(country);
    }

    async provideMobilePhoneNumber(number: string): Promise<void> {
        await this.inputMobilePhoneNumber.fill(number);
    }

    async provideHomePhoneNumber(number: string): Promise<void> {
        await this.inputHomePhoneNumber.fill(number);
    }

    async provideEmail(email: string): Promise<void> {
        await this.inputEmail.fill(email);
    }

    async clickSubmitYourInformation(): Promise<void> {
        await this.buttonSubmitInfo.click();
    }
}
