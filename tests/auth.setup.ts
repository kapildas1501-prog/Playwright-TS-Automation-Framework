import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Fallback to default demo credentials if environment variables aren't present in CI
    const username = process.env.USERNAME || 'Admin';
    const password = process.env.PASSWORD || 'admin123';

    await page.goto('/web/index.php/auth/login');
    await loginPage.login(username, password);
    await page.waitForURL(/dashboard/);

    await page.context().storageState({
        path: authFile
    });

});