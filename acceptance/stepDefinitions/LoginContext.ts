import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/loginPage';
import { UserAccountPage } from '../pageObjects/userAccountPage';

Given('I enter following for login', async function (datatable: DataTable) {
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

Given('I enter following values to login', async function (datatable: DataTable) {
    const credentials = datatable.rowsHash();

    const loginPage = new LoginPage(page);
    await loginPage.provideUsername(credentials['username']);
    await loginPage.providePassword(credentials['password']);
});
