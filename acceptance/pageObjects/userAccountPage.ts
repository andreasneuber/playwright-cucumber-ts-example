import { expect, Page, Locator } from '@playwright/test';

export class UserAccountPage {
    readonly page: Page;
    readonly userAccountMainHeader: Locator;
    readonly adminDashboardMainHeader: Locator;
    readonly hrResourcesLink: Locator;
    readonly salesStatisticsLink: Locator;
    readonly url: string = '?action=useraccount';

    constructor(page: Page) {
        this.page = page;
        this.userAccountMainHeader = page.locator('h2', {hasText: 'User Account'});
        this.adminDashboardMainHeader = page.locator('h2', {hasText: 'Admin Dashboard'});
        this.hrResourcesLink = page.locator('#hr-resources-link');
        this.salesStatisticsLink = page.locator('#sales-statistics-link');
    }

    async visit(): Promise<void> {
        await this.page.goto(BASE_URL + this.url);
    }

    async getUserAccountMainHeader(): Promise<Locator> {
        return this.userAccountMainHeader;
    }

    async getAdminDashboardMainHeader(): Promise<boolean> {
        return await this.adminDashboardMainHeader.isVisible();
    }

    async navigateToHumanResourcesSection(): Promise<void> {
        await this.hrResourcesLink.click();
    }

    async navigateToSalesSection(): Promise<void> {
        await this.salesStatisticsLink.click();
    }
}
