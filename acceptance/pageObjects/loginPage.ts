import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { SELECTORS, URLS } from '../constants';

export class LoginPage extends BasePage {
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly buttonLogin: Locator;
    readonly titleHeader: Locator;
    protected readonly url: string = URLS.LOGIN;

    constructor(page: Page) {
        super(page);
        this.inputUsername = page.locator(SELECTORS.LOGIN.USERNAME);
        this.inputPassword = page.locator(SELECTORS.LOGIN.PASSWORD);
        this.buttonLogin = page.locator(SELECTORS.LOGIN.LOGIN_BUTTON);
        this.titleHeader = page.locator(SELECTORS.LOGIN.TITLE_HEADER);
    }

    async provideUsername(username: string): Promise<void> {
        await this.inputUsername.fill(username);
    }

    async providePassword(password: string): Promise<void> {
        await this.inputPassword.fill(password);
    }

    async login(username: string, password: string): Promise<void> {
        await this.provideUsername(username);
        await this.providePassword(password);
    }

    async clickLogin(): Promise<void> {
        await this.buttonLogin.click();
    }

    async getTitleForm(): Promise<string> {
        const text = await this.titleHeader.textContent();
        if (!text) {
            throw new Error(`Title form text not found on page: ${this.page.url()}`);
        }
        return text;
    }
}
