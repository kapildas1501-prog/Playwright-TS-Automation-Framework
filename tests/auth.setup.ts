import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/web/index.php/auth/login');

    await loginPage.login(
        process.env.USERNAME!,
        process.env.PASSWORD!
    );

    await page.waitForURL(/dashboard/);

    await page.context().storageState({
        path: authFile
    });

});