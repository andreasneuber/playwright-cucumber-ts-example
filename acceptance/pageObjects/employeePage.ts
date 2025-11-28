import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { SELECTORS, URLS, TEXT_CONTENT } from '../constants';

export class EmployeePage extends BasePage {
    readonly employeePageMainHeader: Locator;
    readonly inputEmployeeName: Locator;
    readonly btnSearch: Locator;
    readonly employeeDetailsRecord: Locator;
    readonly employeeNameCell: Locator;
    readonly departmentNameCell: Locator;
    protected readonly url: string = URLS.EMPLOYEE;

    constructor(page: Page) {
        super(page);
        this.employeePageMainHeader = page.locator(SELECTORS.EMPLOYEE.PAGE_HEADER, {hasText: TEXT_CONTENT.EMPLOYEE.PAGE_HEADER});
        this.inputEmployeeName = page.locator(SELECTORS.EMPLOYEE.EMPLOYEE_NAME_INPUT);
        this.btnSearch = page.locator(SELECTORS.EMPLOYEE.SEARCH_BUTTON);
        this.employeeDetailsRecord = page.locator(SELECTORS.EMPLOYEE.EMPLOYEE_DETAILS);
        this.employeeNameCell = page.locator(SELECTORS.EMPLOYEE.EMPLOYEE_NAME_CELL);
        this.departmentNameCell = page.locator(SELECTORS.EMPLOYEE.DEPARTMENT_NAME_CELL);
    }

    async isEmployeePageDisplayed(): Promise<boolean> {
        return await this.employeePageMainHeader.isVisible();
    }

    async fillEmployeeNameInput(employeeName: string): Promise<void> {
        await this.inputEmployeeName.fill(employeeName);
    }

    async clickSearchBtn(): Promise<void> {
        await this.btnSearch.click();
    }

    async isEmployeeRecordDisplayed(): Promise<boolean> {
        return await this.employeeDetailsRecord.isVisible();
    }

    async grabEmployeeName(): Promise<string> {
        const text = await this.employeeNameCell.textContent();
        if (!text) {
            throw new Error(`Employee name not found on page: ${this.page.url()}`);
        }
        return text;
    }

    async grabDepartmentName(): Promise<string> {
        const text = await this.departmentNameCell.textContent();
        if (!text) {
            throw new Error(`Department name not found on page: ${this.page.url()}`);
        }
        return text;
    }
}
