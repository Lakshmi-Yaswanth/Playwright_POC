import { test as baseTexst } from "@playwright/test";
import CommonFunctions from "../pages/common";
import LoginPage from "../pages/login";
const test = baseTexst.extend<{
    loginPage: LoginPage;
    common:CommonFunctions

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    common: async ({ page }, use) => {
        await use(new CommonFunctions(page));
    }
})
export default test;
export const expect = test.expect;