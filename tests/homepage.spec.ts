import { test, expect } from '@playwright/test';
import { BasePage } from '../src/pages/BasePage';
import {HomePage} from '../src/pages/HomePage'

test ('The  homepage load correctly',async({page})=>{
    const homepage=new HomePage(page);
    //const basePage=new BasePage(page);

    await homepage.getURL();

    await expect(page).toHaveTitle('XYZ Bank');


})

test('Customer login button navigates to the customer page', async({page})=>{
    const homepage=new HomePage(page);
    homepage.getURL();
    await homepage.clickCustomerLoginBtn();
    await expect (page).toHaveURL(/customer/);


})
test ('Bank manager navigates to the bank manager page', async({page})=>{
const homepage=new HomePage(page);
homepage.getURL();
await homepage.clickManagerLoginBtn();
await expect (page).toHaveURL(/manager/);


})