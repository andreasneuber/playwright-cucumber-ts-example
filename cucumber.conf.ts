import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

// in milliseconds
setDefaultTimeout(60000);

Object.assign(global, {
    BASE_URL: 'http://localhost:8000/index.php'
});

// launch the browser
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 100,
    });
});

// close the browser
AfterAll(async function () {
    await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
    await global.page.close();
    await global.context.close();
});
