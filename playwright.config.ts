import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({

    testDir: './tests',

    fullyParallel: true,

    workers: 3,

    reporter: [
        ['html'],
        ['allure-playwright', {
            outputFolder: 'allure-results',
            detail: true,
            suiteTitle: true
        }]
    ],

    use: {
    
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'

    },

   projects: [

{
    name: 'setup',
    testMatch: /auth\.setup\.ts/
},

{
    name: 'chrome',

    use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json'
    },

    dependencies: ['setup']
},

{
    name: 'firefox',

    use: {
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json'
    },

    dependencies: ['setup']
}

]

});