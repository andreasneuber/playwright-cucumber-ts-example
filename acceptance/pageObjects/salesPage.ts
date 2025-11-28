import { expect, Page, Locator } from '@playwright/test';

export class SalesPage {
    readonly page: Page;
    readonly salesStatisticsPageMainHeader: Locator;
    readonly salesYearMonthHeaderCell: Locator;
    readonly monthCell: Locator;
    readonly salesAmountCell: string = "//td[contains(text(), '%s')]/following-sibling::td";
    readonly url: string = '?action=sales';

    constructor(page: Page) {
        this.page = page;
        this.salesStatisticsPageMainHeader = page.locator('h2', {hasText: 'Sales - Statistics'});
        this.salesYearMonthHeaderCell = page.locator('.sales.header-year-month');
        this.monthCell = page.locator('td');
    }

    async visit(): Promise<void> {
        await this.page.goto(BASE_URL + this.url);
    }

    async salesStatisticsPageIsDisplayed(): Promise<void> {
        await expect(this.salesStatisticsPageMainHeader).toBeVisible();
    }

    async grabYearMonthHeader(): Promise<string | null> {
        return await this.salesYearMonthHeaderCell.textContent();
    }

    async monthCellIsDisplayed(month: string): Promise<void> {
        await expect(this.monthCell.filter({hasText: month})).toBeVisible();
    }

    async grabSalesAmountFromMonth(month: string): Promise<string | null> {
        const xPath = this.salesAmountCell.replace('%s', month);
        return await this.page.locator(xPath).textContent();
    }
}
