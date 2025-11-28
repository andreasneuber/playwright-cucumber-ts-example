export const SELECTORS = {
    LOGIN: {
        USERNAME: 'input[name="user"]',
        PASSWORD: 'input[name="pw"]',
        LOGIN_BUTTON: '#btnLogin',
        TITLE_HEADER: 'h2'
    },
    USER_ACCOUNT: {
        USER_ACCOUNT_HEADER: 'h2',
        ADMIN_DASHBOARD_HEADER: 'h2',
        HR_RESOURCES_LINK: '#hr-resources-link',
        SALES_STATISTICS_LINK: '#sales-statistics-link'
    },
    EMPLOYEE: {
        PAGE_HEADER: 'h2',
        EMPLOYEE_NAME_INPUT: '#employee-name',
        SEARCH_BUTTON: '#btnSearch',
        EMPLOYEE_DETAILS: '#employee-details',
        EMPLOYEE_NAME_CELL: '.employee.name',
        DEPARTMENT_NAME_CELL: '.employee.department'
    },
    SALES: {
        PAGE_HEADER: 'h2',
        YEAR_MONTH_HEADER: '.sales.header-year-month',
        MONTH_CELL: 'td',
        SALES_AMOUNT_CELL: "//td[contains(text(), '%s')]/following-sibling::td"
    },
    CELSIUS: {
        CELSIUS_INPUT: '//input[@name="celsius"]',
        CONVERT_BUTTON: '#btnCelsius',
        FAHRENHEIT_INPUT: '//input[@name="fahrenheit"]'
    },
    CREDIT_CARD: {
        CARD_NAME: '#cname',
        CARD_NUMBER: '#ccnum',
        EXPIRY_DATE: '#expdate',
        CVV: '#cvv',
        PAY_NOW_BUTTON: '#btnPaynow',
        CARD_FORM: '#ccentry',
        ALERT_BOX: '.alert',
        ALERT_RESPONSE: '.response',
        ALERT_MORE_INFO: '.more-info'
    },
    DETAILS_FORM: {
        FIRSTNAME: '#fname',
        LASTNAME: '#lname',
        STREET: '#street',
        CITY: '#city',
        ZIP: '#zip',
        STATE: '#state',
        COUNTRY: '#country',
        MOBILE_PHONE: '#mobile',
        HOME_PHONE: '#home',
        EMAIL: '#email',
        SUBMIT_BUTTON: '#submit-info'
    },
    THANK_YOU: {
        MESSAGE_HEADER: 'h2'
    }
} as const;

export const URLS = {
    LOGIN: '?action=form4',
    USER_ACCOUNT: '?action=useraccount',
    EMPLOYEE: '?action=employee',
    SALES: '?action=sales',
    CELSIUS: '?action=form6',
    CREDIT_CARD: '?action=form3',
    CREDIT_CARD_RESPONSE: '?action=responsecc',
    DETAILS_FORM: '?action=form1',
    THANK_YOU: '?action=thankYou'
} as const;

export const TEXT_CONTENT = {
    USER_ACCOUNT: {
        USER_ACCOUNT_HEADER: 'User Account',
        ADMIN_DASHBOARD_HEADER: 'Admin Dashboard'
    },
    EMPLOYEE: {
        PAGE_HEADER: 'Human Resources - Find employee'
    },
    SALES: {
        PAGE_HEADER: 'Sales - Statistics'
    }
} as const;
