import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class SalesPage extends BasePage {
    readonly salesStatisticsPageMainHeader: Locator;
    readonly salesYearMonthHeaderCell: Locator;
    readonly monthCell: Locator;
    readonly salesAmountCell: string = "//td[contains(text(), '%s')]/following-sibling::td";
    protected readonly url: string = '?action=sales';

    constructor(page: Page) {
        super(page);
        this.salesStatisticsPageMainHeader = page.locator('h2', {hasText: 'Sales - Statistics'});
        this.salesYearMonthHeaderCell = page.locator('.sales.header-year-month');
        this.monthCell = page.locator('td');
    }

    async isSalesStatisticsPageDisplayed(): Promise<boolean> {
        return await this.salesStatisticsPageMainHeader.isVisible();
    }

    async grabYearMonthHeader(): Promise<string> {
        const text = await this.salesYearMonthHeaderCell.textContent();
        if (!text) throw new Error('Year month header not found');
        return text;
    }

    async isMonthCellDisplayed(month: string): Promise<boolean> {
        return await this.monthCell.filter({hasText: month}).isVisible();
    }

    async grabSalesAmountFromMonth(month: string): Promise<string> {
        const xPath = this.salesAmountCell.replace('%s', month);
        const text = await this.page.locator(xPath).textContent();
        if (!text) throw new Error(`Sales amount for month ${month} not found`);
        return text;
    }
}
