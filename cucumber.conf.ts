import { Before, BeforeAll, AfterAll, After, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "playwright";
import { config } from "./config";
import * as fs from 'fs';

// Set timeout from config
setDefaultTimeout(config.timeout);

// Ensure screenshot directory exists
if (config.screenshot.onFailure && !fs.existsSync(config.screenshot.path)) {
    fs.mkdirSync(config.screenshot.path, { recursive: true });
}

Object.assign(global, {
    BASE_URL: config.baseUrl
});

// launch the browser
BeforeAll(async function () {
    const browserType = {
        chromium,
        firefox,
        webkit
    }[config.browser];
    
    global.browser = await browserType.launch({
        headless: config.headless,
        slowMo: config.slowMo,
    });
});

// close the browser
AfterAll(async function () {
    await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
    const contextOptions: any = {
        viewport: config.viewport
    };
    
    if (config.video.enabled) {
        contextOptions.recordVideo = {
            dir: config.video.path
        };
    }
    
    global.context = await global.browser.newContext(contextOptions);
    global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function (scenario) {
    // Take screenshot on failure
    if (config.screenshot.onFailure && scenario.result?.status === Status.FAILED) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotName = `failure-${scenario.pickle.name.replace(/\s+/g, '-')}-${timestamp}.png`;
        const screenshotPath = `${config.screenshot.path}/${screenshotName}`;
        
        const screenshot = await global.page.screenshot({ path: screenshotPath, fullPage: true });
        this.attach(screenshot, 'image/png');
    }
    
    await global.page.close();
    await global.context.close();
});
