import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ProvideYourDetailsPage } from '../pageObjects/provideYourDetailsPage.js';
import { ThankYouPage } from '../pageObjects/thankYouPage.js';

Given('I navigate to Information about yourself page', async function () {
    const provideYourDetailsPage = new ProvideYourDetailsPage(page);
    await provideYourDetailsPage.visit();
});

When('I provide the following details', async function (datatable) {
    const provideYourDetailsPage = new ProvideYourDetailsPage(page);

    const details = datatable.rowsHash();
    await provideYourDetailsPage.provideFirstname(details['firstname']);
    await provideYourDetailsPage.provideLastName(details['lastname']);
    await provideYourDetailsPage.provideStreet(details['street']);
    await provideYourDetailsPage.provideCity(details['city']);
    await provideYourDetailsPage.provideZip(details['zip']);
    await provideYourDetailsPage.provideState(details['state']);
    await provideYourDetailsPage.provideCountry(details['country']);
    await provideYourDetailsPage.provideMobilePhoneNumber(details['mobile phone']);
    await provideYourDetailsPage.provideHomePhoneNumber(details['home phone']);
    await provideYourDetailsPage.provideEmail(details['email']);

    await provideYourDetailsPage.clickSubmitYourInformation();
});

Then(/^I will see message "([^"]*)"$/, async function (expectedMessage: string) {
    const thankYouPage = new ThankYouPage(page);
    const actualMessage = await thankYouPage.grabThankYouMessage();
    expect(actualMessage).toBe(expectedMessage);
});
