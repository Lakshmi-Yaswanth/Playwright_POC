import test, { expect } from "../fixtures/pageFixtures"
import { environment } from "../base/environment/environment";

test.describe("Login as user",()=>{
    test.beforeEach(async ({ page }) => {
        await page.goto(environment.frontendUrl,{waitUntil: 'load', timeout: 100000});
    })
    test("test 1", async ({loginPage, page }) => {
        expect(page.url()).toBe(environment.frontendUrl);
        await loginPage.login(environment.frontendUser,environment.password);
        expect(await page.title()).toBe("RevaturePro - Dashboard");
    });
})
