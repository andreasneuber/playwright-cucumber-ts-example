import reporter from 'cucumber-html-reporter';

reporter.generate({
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'STAGING',
        Browser: 'Chrome 110.0',
        Platform: 'Windows 10',
    },
});
