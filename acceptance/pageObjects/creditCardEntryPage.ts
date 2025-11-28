import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CreditCardEntryPage extends BasePage {
    readonly inputCardName: Locator;
    readonly inputCardNum: Locator;
    readonly inputExpiryDate: Locator;
    readonly inputCvv: Locator;
    readonly buttonPayNow: Locator;
    readonly creditCardInfoEntryForm: Locator;
    protected readonly url: string = '?action=form3';

    constructor(page: Page) {
        super(page);
        this.inputCardName = page.locator('#cname');
        this.inputCardNum = page.locator('#ccnum');
        this.inputExpiryDate = page.locator('#expdate');
        this.inputCvv = page.locator('#cvv');
        this.buttonPayNow = page.locator('#btnPaynow');
        this.creditCardInfoEntryForm = page.locator('#ccentry');
    }

    async enterCardInformation(cardname: string, ccnumber: string, expiryDate: string, cvv: string): Promise<void> {
        await this.inputCardName.fill(cardname);
        await this.inputCardNum.fill(ccnumber);
        await this.inputExpiryDate.fill(expiryDate);
        await this.inputCvv.fill(cvv);
    }

    async submitPayment(): Promise<void> {
        await this.buttonPayNow.click();
    }

    async getCreditCardInfoEntryForm(): Promise<Locator> {
        return this.creditCardInfoEntryForm;
    }
}
