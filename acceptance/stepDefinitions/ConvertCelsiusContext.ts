import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CelsiusToFahrenheitPage } from '../pageObjects/celsiusToFahrenheitPage.js';

Given('I provide {string} degree Celsius', async function (celsius: string) {
    const celsiusToFahrenheitPage = new CelsiusToFahrenheitPage(page);
    await celsiusToFahrenheitPage.visit();
    await celsiusToFahrenheitPage.provideCelsius(celsius);
});

When('I click the convert button', async function () {
    const celsiusToFahrenheitPage = new CelsiusToFahrenheitPage(page);
    await celsiusToFahrenheitPage.clickConvert();
});

Then('I should see as result {string} Fahrenheit', async function (expectedFahrenheit: string) {
    const celsiusToFahrenheitPage = new CelsiusToFahrenheitPage(page);
    const actualFahrenheit = await celsiusToFahrenheitPage.readFahrenheitField();
    expect(actualFahrenheit).toBe(expectedFahrenheit);
});
