import { expect, Locator, Page } from "@playwright/test";

export class Customer{
    page:Page;
    customersBtn;
    searchBar;
    customerSelect;
    customerLogin;

    constructor(page:Page){
        this.page=page;
        this.customersBtn=this.page.getByRole("button",{name:/customers/i});
        this.searchBar=this.page.getByPlaceholder('Search Customer');
        this.customerSelect=this.page.locator('select#userSelect');
        this.customerLogin=this.page.getByRole("button",{name:/login/i});

    }
    async openCustomers(){
        await this.customersBtn.click();

    }
    async searchCustomer(){
        await this.searchBar.fill('Harry');

    }
    async getTableRow(){
        const row =this.page.locator('table tbody tr').filter({hasText:"Harry"}).filter({hasText:"Potter"});

     
       return row.locator('td').nth(3);
       
    }
    async selectCustomer(){
      await  this.customerSelect.selectOption('Ron Weasly');
      this.customerLogin.click();

    }

}