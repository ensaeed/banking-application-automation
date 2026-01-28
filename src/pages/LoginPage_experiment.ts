import { Page } from "@playwright/test";
import { BASE_URL } from "../config/env";


export class LoginPageExperiment {
   readonly page:Page;

constructor(page:Page){
    this.page=page;
}
async goTo(){
    await this.page.goto(BASE_URL);
}

async managerBtn(){
   await this.page.getByRole('button',{name:'Bank Manager Login'}).click();
}

}
