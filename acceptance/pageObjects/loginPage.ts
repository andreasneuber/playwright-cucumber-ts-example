import { expect, Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly buttonLogin: Locator;
    readonly titleHeader: Locator;
    readonly url: string = '?action=form4';

    constructor(page: Page) {
        this.page = page;
        this.inputUsername = page.locator('input[name="user"]');
        this.inputPassword = page.locator('input[name="pw"]');
        this.buttonLogin = page.locator('#btnLogin');
        this.titleHeader = page.locator('h2');
    }

    async visit(): Promise<void> {
        await this.page.goto(BASE_URL + this.url);
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

    async getTitleForm(): Promise<string | null> {
        return await this.titleHeader.textContent();
    }
}
