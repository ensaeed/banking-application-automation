import {Page} from '@playwright/test';
import { HomePage } from './HomePage';
import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class OpenAccount {

    page:Page;
    readonly openAccount:Locator;
    readonly customerSelect:Locator;
    readonly currencySelect:Locator;
    readonly processButton:Locator;

    constructor(page:Page){
    this.page=page;
    this.openAccount=this.page.getByRole('button',{name:/open account/i});
    this.customerSelect=this.page.locator('select#userSelect');
    this.processButton=this.page.getByRole('button',{name:/process/i});
    this.currencySelect=this.page.locator('#currency');
    }

    async openAccountSelect(){
        await this.openAccount.click();
    }
    async  customerFromDropdown(){
        await this.customerSelect.selectOption('Harry Potter');
    }

    async selectCurrency(){
        await this.currencySelect.selectOption('Dollar');
    }

    async slectAllCurrencies(){
     const currency= await  this.currencySelect.locator('option').allInnerTexts();
     return currency;
    }
    
    async addCustomer(){
        let message='';
        
        this.page.once('dialog', async dialog=>{
            message=dialog.message();
            await dialog.accept();
        } )
    
        await this.processButton.click();
        return message;
    }

    static  extractAccountNumber(message:string):string{
        const match=message.match(/account number\s*:\s*(\d+)/i);
       
        if(! match||!match[1]){
            throw new Error(`Could not extract the account number from the dialogue:${message}`);
        }
        console.log(match[1]);
        return match[1];
    

    }


}
