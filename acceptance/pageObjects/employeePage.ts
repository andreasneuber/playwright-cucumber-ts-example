import { expect, Page, Locator } from '@playwright/test';

export class EmployeePage {
    readonly page: Page;
    readonly employeePageMainHeader: Locator;
    readonly inputEmployeeName: Locator;
    readonly btnSearch: Locator;
    readonly employeeDetailsRecord: Locator;
    readonly employeeNameCell: Locator;
    readonly departmentNameCell: Locator;
    readonly url: string = '?action=employee';

    constructor(page: Page) {
        this.page = page;
        this.employeePageMainHeader = page.locator('h2', {hasText: 'Human Resources - Find employee'});
        this.inputEmployeeName = page.locator('#employee-name');
        this.btnSearch = page.locator('#btnSearch');
        this.employeeDetailsRecord = page.locator('#employee-details');
        this.employeeNameCell = page.locator('.employee.name');
        this.departmentNameCell = page.locator('.employee.department');
    }

    async visit(): Promise<void> {
        await this.page.goto(BASE_URL + this.url);
    }

    async employeePageIsDisplayed(): Promise<void> {
        await expect(this.employeePageMainHeader).toBeVisible();
    }

    async fillEmployeeNameInput(employeeName: string): Promise<void> {
        await this.inputEmployeeName.fill(employeeName);
    }

    async clickSearchBtn(): Promise<void> {
        await this.btnSearch.click();
    }

    async employeeRecordIsDisplayed(): Promise<void> {
        await expect(this.employeeDetailsRecord).toBeVisible();
    }

    async grabEmployeeName(): Promise<string | null> {
        return await this.employeeNameCell.textContent();
    }

    async grabDepartmentName(): Promise<string | null> {
        return await this.departmentNameCell.textContent();
    }
}
