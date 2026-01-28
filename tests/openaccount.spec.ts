import {test,expect} from '@playwright/test';
import { OpenAccount } from '../src/pages/OpenAccount';
//import { BasePage } from '../src/pages/BasePage';
import { HomePage } from '../src/pages/HomePage';


test('Manager can open an account', async({page})=>{
const homePage = new HomePage(page);
const openAccount=new OpenAccount(page);
 await homePage.getURL();
 await homePage.clickManagerLoginBtn();
 await openAccount.openAccountSelect();
 await openAccount.customerFromDropdown();
 await openAccount.selectCurrency();
const message= await openAccount.addCustomer();
 expect(message).toContain('Account created successfully');
 const currency=await openAccount.slectAllCurrencies();
 expect(currency).toEqual(expect.arrayContaining(['Dollar','Pound','Rupee']))


})