import { Page } from "playwright";
import { environment } from "../base/environment/environment";

export default class CommonFunctions  {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    gotoFrontend = async () => {
        await this.page.goto(environment.frontendUrl);
    }
    gotoCore = async () => {
        await this.page.goto(environment.coreUrl);
    }
    
}