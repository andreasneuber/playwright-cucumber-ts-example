import { Given, When, Then } from '@cucumber/cucumber';
import { Page } from '@playwright/test';

let orangeFriend: Page;
let greenFriend: Page;
let brownFriend: Page;

Given('different people went to different sites', async function () {
    orangeFriend = page;
    await orangeFriend.goto('http://localhost:8000/index.php?action=orangePage');

    greenFriend = await context.newPage();
    await greenFriend.goto('http://localhost:8000/index.php?action=greenPage');

    brownFriend = await context.newPage();
    await brownFriend.goto('http://localhost:8000/index.php?action=brownPage');
});

When('they realize that they forgot what they actually wanted to do there', async function () {
    console.log("\t Wait a minute...");

    await brownFriend.reload();
    await brownFriend.reload();
    await greenFriend.reload();
    await greenFriend.reload();
    await orangeFriend.reload();
    await orangeFriend.reload();

    console.log("\t We forgot that we are so forgetful.");
});

Then('they leave the sites again', function () {
    brownFriend.close();
    greenFriend.close();
    orangeFriend.close();
});
