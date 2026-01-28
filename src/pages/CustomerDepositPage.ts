import {Page, Locator } from "@playwright/test";

export class CustomerDepositPage{

    readonly depositButton:Locator;
    page;
    readonly amount:Locator;
    readonly submitButton:Locator;
    readonly successMessage:Locator;

    constructor(page:Page){
    this.page=page;
    this.depositButton=this.page.getByRole("button",{name:/deposit/i}).first();
    this.amount=this.page.getByPlaceholder('amount');
    this.submitButton=this.page.getByRole("button",{name:/deposit/i}).last();
    this.successMessage=this.page.locator('span[ng-show="message"]');
    }

    async clickDepositButton(){
        await this.depositButton.click();
    }

    async amountToBeDepositedAndSubmit(value:string){
      await  this.amount.fill(value);
       await this.submitButton.click();

    }
   
}