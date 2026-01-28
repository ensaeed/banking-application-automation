import {test,expect} from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import {Customer} from '../src/pages/Customer';
import { OpenAccount } from '../src/pages/OpenAccount';
import { AddCustomers } from '../src/pages/AddCustomers';

test('Account is assigned to the customer', async({page})=>{

    const homePage=new HomePage(page);
    const customer=new Customer(page);
    const openAccount=new OpenAccount(page);
    const addCustomer=new AddCustomers(page);
    await homePage.getURL();
    await homePage.clickManagerLoginBtn();
    
   
   
  // const dialogMessage=await openAccount.addCustomer()
  // const accountNumber=await OpenAccount.extractAccountNumber(dialogMessage);

    await customer.openCustomers();
    await customer.searchCustomer();
    const accountCell= await customer.getTableRow();


   await expect(accountCell).toContainText(/\d+/);

   
})