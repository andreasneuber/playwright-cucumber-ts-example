import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { SELECTORS, URLS, TEXT_CONTENT } from '../constants';

export class UserAccountPage extends BasePage {
    readonly userAccountMainHeader: Locator;
    readonly adminDashboardMainHeader: Locator;
    readonly hrResourcesLink: Locator;
    readonly salesStatisticsLink: Locator;
    protected readonly url: string = URLS.USER_ACCOUNT;

    constructor(page: Page) {
        super(page);
        this.userAccountMainHeader = page.locator(SELECTORS.USER_ACCOUNT.USER_ACCOUNT_HEADER, {hasText: TEXT_CONTENT.USER_ACCOUNT.USER_ACCOUNT_HEADER});
        this.adminDashboardMainHeader = page.locator(SELECTORS.USER_ACCOUNT.ADMIN_DASHBOARD_HEADER, {hasText: TEXT_CONTENT.USER_ACCOUNT.ADMIN_DASHBOARD_HEADER});
        this.hrResourcesLink = page.locator(SELECTORS.USER_ACCOUNT.HR_RESOURCES_LINK);
        this.salesStatisticsLink = page.locator(SELECTORS.USER_ACCOUNT.SALES_STATISTICS_LINK);
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
