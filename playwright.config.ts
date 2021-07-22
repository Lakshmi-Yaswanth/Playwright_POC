import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout:1000000,
    use: {
        headless: false,
        browserName: "chromium",
        channel:"chrome",
        screenshot:"only-on-failure",
        video:"on",
        trace:'on',
    },
    testMatch: ["login.test.ts",
    "trace.test.ts"
 ],
    retries: 3,
    reporter: [["list"], ["json", { outputFile: "test-result.json" }]],
}
export default config;