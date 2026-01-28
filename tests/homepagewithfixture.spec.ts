import { test, expect } from '../src/fixtures/homePageFixture';
import { BasePage } from '../src/pages/BasePage';
import {HomePage} from '../src/pages/HomePage'


test ('The  homepage load correctly',async({homePage})=>{
  
    

    await homePage.getURL();

    await expect(homePage.page).toHaveTitle('XYZ Bank');


})

test('Customer login button navigates to the customer page', async({homePage})=>{
  //  const homepage=new HomePage(page);
    homePage.getURL();
    await homePage.clickCustomerLoginBtn();
    await expect (homePage.page).toHaveURL(/customer/);


})
test ('Bank manager navigates to the bank manager page', async({homePage})=>{
//const homepage=new HomePage(page);
homePage.getURL();
await homePage.clickManagerLoginBtn();
await expect (homePage.page).toHaveURL(/manager/);


})