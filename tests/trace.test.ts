import { BrowserContext, expect, Page, test } from "@playwright/test";
import { environment } from "../base/environment/environment";
import CommonFunctions from "../pages/common";
import LoginPage from "../pages/login";

test.describe("TC001", () => {
    let login: LoginPage;
    let common: CommonFunctions;
    let page: Page;
    let context: BrowserContext;
test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        await context.tracing.start({
            screenshots: true,
            snapshots: true
        })
        page = await context.newPage();
        login = new LoginPage(page);
        common = new CommonFunctions(page);
    })
    test.afterAll(async () => {
        await context.tracing.stop({
            path: "trace.zip"
        });
    })
    test.beforeEach(async () => {
        await page.goto(environment.frontendUrl,{waitUntil: 'load', timeout: 100000});
    });
    test("Login positive", async () => {
        expect(page.url()).toBe(environment.frontendUrl);
        await login.login(environment.frontendUser,environment.password);
        expect(await page.title()).toBe("RevaturePro - Login");
    });
})