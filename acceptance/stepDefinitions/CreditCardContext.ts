import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CreditCardEntryPage } from '../pageObjects/creditCardEntryPage';
import { CreditCardResponsePage } from '../pageObjects/creditCardResponsePage';

Given('User is on card card entry page', async function () {
    const creditCardEntryPage = new CreditCardEntryPage(page);
    await creditCardEntryPage.visit();
});

When(/^User (.*) enters card number (.*) together with expiry date (.*) and cvv (.*)$/,
    async function (name: string, ccnumber: string, expirydate: string, cvv: string) {
        const creditCardEntryPage = new CreditCardEntryPage(page);
        await creditCardEntryPage.enterCardInformation(name, ccnumber, expirydate, cvv);
        await creditCardEntryPage.submitPayment();
    });

Then(/^the page will respond with (.*) and provide as reason (.*)$/, async function (expectedResponse: string, expectedReason: string) {
    const creditCardResponsePage = new CreditCardResponsePage(page);
    await expect(await creditCardResponsePage.isAlertMessageBoxDisplayed()).toBeTruthy();

    const actualResponse = await creditCardResponsePage.grabResponseFromAlertBox();
    await expect(actualResponse).toContain(expectedResponse);

    const actualReason = await creditCardResponsePage.grabMoreInfoFromAlertBox();
    await expect(actualReason).toContain(expectedReason);
});
