import {test,expect} from '@playwright/test';
import { Page } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { Customer } from '../src/pages/Customer';
import { CustomerDepositPage } from '../src/pages/CustomerDepositPage';

test('Make a deposit in customer account',async({page})=>{

    const homePage=new HomePage(page);
    const customer=new Customer(page);
    const customerDepositPage=new CustomerDepositPage(page);
    await homePage.getURL();
    await homePage.clickCustomerLogin();
    await customer.selectCustomer();
    await customerDepositPage.clickDepositButton();
    await customerDepositPage.amountToBeDepositedAndSubmit('100');

    await expect(customerDepositPage.successMessage).toContainText('Deposit Successful');
    await expect (page.locator('text=Balance :')).toContainText(`Balance : 100`);
    

    


})