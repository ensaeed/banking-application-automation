import { Page } from "@playwright/test";
import { env } from "../../config/env";

export class BasePage{
    readonly page;

    constructor(page:Page){
        this.page=page;
    }

    async getURL(){
        await this.page.goto(env.dev.baseURL);
    }
}