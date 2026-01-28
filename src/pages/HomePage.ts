import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

import { env } from "../../config/env";

export class HomePage extends BasePage{

    //readonly page:Page;   
    readonly bankManagerLoginBtn:Locator;
    readonly customerLoginBtn:Locator;

    constructor (page:Page){
        super(page);

        this.bankManagerLoginBtn=page.getByRole("button",{name:/bank manager login/i});
        this.customerLoginBtn=page.getByRole("button",{name:/customer login/i});

    }

    async clickManagerLoginBtn(){
      await  this.bankManagerLoginBtn.click();
    }

    async clickCustomerLogin(){
       await this.customerLoginBtn.click();
    }

}