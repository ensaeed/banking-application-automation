import { Locator, Page } from "@playwright/test";
import {test,expect} from '@playwright/test';

export class AddCustomers{

    page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly postCode: Locator;
    readonly submitBtn:Locator;
    readonly addCustomerBtn:Locator;

    constructor (page:Page){
        this.page=page;
        this.firstName=this.page.getByPlaceholder('First Name');
        this.lastName=this.page.getByPlaceholder('Last Name');
        this.postCode=this.page.getByPlaceholder('Post Code');
        this.submitBtn=this.page.getByRole("button",{name:/add customer/i}).nth(1);
        this.addCustomerBtn=this.page.getByRole("button",{name:/add customer/i}).nth(0);
    }

    async addCustomerAndHandlePopup(first:string,last:string,postcode:string){

        
      await  this.firstName.fill(first);
       await this.lastName.fill(last);
       await this.postCode.fill(postcode);

      

        let message = '';

  this.page.once('dialog', async dialog => {
    message = dialog.message();   // capture text
    await dialog.accept();        // click OK
  });
   
       
         await this.submitBtn.click();

       return message;
    }
    async clickAddCustomerBtn(){
        await this.addCustomerBtn.click();
      
    }
        }


    

