import { test, expect } from '../fixtures/testFixture';


test('verify dashboard after login', async ({ page }) => {

    await page.goto('/web/index.php/dashboard/index');

    await expect(page).toHaveURL(/dashboard/);

});