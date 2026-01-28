//import {test, expect} from '@playwright/test';
import { BasePage } from '../src/pages/BasePage';
import {AddCustomers} from '../src/pages/AddCustomers';
import { HomePage } from '../src/pages/HomePage';
import {validCustomerData,duplicateCustomerData} from '../src/data/customerData.json';
import {test,expect} from '../src/fixtures/homePageFixture'

//const validCustomerData= customerData;

test('Manager can add a customer',async({homePage,page})=>{


    const fname=validCustomerData.firstName+Date.now();
    const lname=validCustomerData.lastName;
    const pcode=validCustomerData.postCode;

    const addCustomers=new AddCustomers(page);
    //const homePage=new HomePage(page);
    await homePage.getURL();
    await homePage.clickManagerLoginBtn();
    await addCustomers.clickAddCustomerBtn();
    
   const message= await addCustomers.addCustomerAndHandlePopup(fname,lname,pcode);
    expect(message).toContain('Customer added successfully');

  })

  test ('Duplicate customer error record is displayed', async({homePage,page})=>{

    const fname=duplicateCustomerData.firstname;
    const lname=duplicateCustomerData.lastname;
    const pcode=duplicateCustomerData.PostCode;
    const addCustomers=new AddCustomers(page);
   // const homePage=new HomePage(page);
    await homePage.getURL();
    await homePage.clickManagerLoginBtn();
    await addCustomers.clickAddCustomerBtn();
    const  message=await addCustomers.addCustomerAndHandlePopup(fname,lname,pcode);
    expect(message).toContain('Please check the details. Customer may be duplicate.')

  })