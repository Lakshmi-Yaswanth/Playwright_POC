import { Page } from "playwright";
import CommonFunctions from "./common";

export default class LoginPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    eleEmailTextField = async () => await this.page.$("id=loginEmail");
    elePassTextField = async () => await this.page.$("id=loginPassword");
    userClick=()=>this.page.$('text=Usain Bolt');
    profile=()=>this.page.$('text=Profile');
    firstName=async()=>await this.page.$('[placeholder="First Name"]');
    lastName=async()=>await this.page.$('[placeholder="Last Name"]');
    gitName=async()=>await this.page.$('[placeholder="Git username"]');
    phoneNumber=async()=>await this.page.$('[placeholder="Mobile Number"]');
    addprofilePic=async()=>await this.page.$("//a[@data-keyboard='true']//i[1]");
    choosePic=async()=>await this.page.$("('text=Choose Picture')");
    updatePic=async()=>await this.page.$("text=Update Picture");
    signout=async()=>await this.page.$('a:has-text("Signout")');
    Update=async()=>await this.page.$("//button[text()='update']")
    public get eleLoginBtn() {
        return this.page.$("//button[@type='submit']");
    }

    public async enterUserName(name: string) {
        const ele = await this.eleEmailTextField();
        if (ele != null)
            await ele.fill(name);
        else throw new Error("No element, hence failed")
    }
    public async enterUserPassword(pass: string) {
        const ele = await this.elePassTextField();
        await ele?.fill(pass);
    }
    public async clickLoginBtn() {
        const ele = await this.eleLoginBtn;
        await ele?.click();
    }
    public async login(username: string, pass: string) {
        await this.enterUserName(username);
        await this.enterUserPassword(pass);
        await Promise.all([
            this.page.waitForNavigation({'waitUntil':'domcontentloaded'}),
            this.clickLoginBtn()
          ]); 
    }
    

}