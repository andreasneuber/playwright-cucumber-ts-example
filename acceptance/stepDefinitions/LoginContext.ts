import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage.js';
import { UserAccountPage } from '../pageObjects/userAccountPage.js';

Given('I enter following for login', async function (datatable) {
    const credentials = datatable.hashes();

    const loginPage = new LoginPage(page);
    await loginPage.provideUsername(credentials[0]['username']);
    await loginPage.providePassword(credentials[0]['password']);
});

When('I click login button', async function () {
    const loginPage = new LoginPage(page);
    await loginPage.clickLogin();
});

Then('I should be able to access the protected area', async function () {
    const userAccountPage = new UserAccountPage(page);
    await userAccountPage.getAdminDashboardMainHeader();
});

Given('I enter following values to login', async function (datatable) {
    const credentials = datatable.rowsHash();

    const loginPage = new LoginPage(page);
    await loginPage.provideUsername(credentials['username']);
    await loginPage.providePassword(credentials['password']);
});
