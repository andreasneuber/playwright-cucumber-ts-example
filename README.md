# playwright-cucumber-ts-example
Sample implementation with Playwright and Cucumber

## Application under test
The feature files, step definitions and page objects were written for https://github.com/andreasneuber/automatic-test-sample-site.
Readme in this repo has further details how to set it up.

## Install
`npm install`

## Run
To run all tests with much output on terminal: `npm run test:normal`

To run all tests with minimum output on terminal and adding results into a json file for a report: `npm run test:all`

or

`npm run test:e2e acceptance/features/ConvertCelsius.feature`

or 

`npm run test:e2e acceptance/features/AdminPrivileges.feature`

or 

`npm run test:e2e acceptance/features/Creditcard.feature`

or

`npm run test:e2e acceptance/features/Login.feature`

or

`npm run test:e2e acceptance/features/ProvideYourDetails.feature`

or

`npm run test:e2e acceptance/features/ConcurrentWindows.feature`

## Reporting
- Run tests
- Then generate HTML report: `npm run report`
- Open the generated HTML report in browser located here: `reports/cucumber_report.html`

## Docker
Build the container: `docker build --no-cache -t playwright-cucumber-js-docker .`

Then run it: `docker run --rm --net="host" -it playwright-cucumber-js-docker:latest npm run test:normal`

`--net=host` is needed because the application under test is running on `http://localhost:8000`

## Docker Compose with "Application under Test"
Build container with the sample application https://github.com/andreasneuber/automatic-test-sample-site:     
`docker build --no-cache -t sample-site .`

Build the container with tests here: `docker build --no-cache -t playwright-cucumber-js-docker .`

Then: `docker compose up`

All tests will be executed and the `cucumber_report.html` report will be copied to root directory.

## FAQ
### What is the test runner in this project?
Its Cucumber (see also file `package.json` > scripts).  
Cucumber parses first the feature files, finds the needed step definitions, step definitions use Playwright.  
This means the config file for settings like speed, heeadless/headed and more is `cucumber.config.js`

### How can I make tests run faster?
In file `cucumber.conf.js` find line with `slowMo` and reduce the value.

### How do I make the browser window visible?
In file `cucumber.conf.js` find line with `headless: true` and set value to "false".

### How do I update the browsers which come along with Playwright?
`npx playwright install`

### What is the test runner?
Cucumber-JS. See the "scripts" responsible for executing tests in `package.json`.
Cucumber parses the feature files, and then in the step definitions underlying Playwright functionality is called.
Good to keep in mind when going through Playwright documentation - for example with https://playwright.dev/docs/videos, 
the fitting code is always under tab "Library" not "Test".
