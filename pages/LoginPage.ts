import { Page } from '@playwright/test';

export class LoginPage {

    private page: Page;

    constructor(page: Page) {

        this.page = page;

    }


    async login(user: string, pass: string) {

        await this.page
            .locator('[name="username"]')
            .fill(user);

        await this.page
            .locator('[name="password"]')
            .fill(pass);

        await this.page
            .locator('button[type="submit"]')
            .click();

    }

}