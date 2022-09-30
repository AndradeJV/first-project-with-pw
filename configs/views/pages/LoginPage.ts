import { Page, expect } from '@playwright/test';


export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async goToBaseUrl() {
        await this.page.goto('https://login-app-qacademy.vercel.app/');
        
        const title = this.page.locator('.App-header > p');
        
        await expect(title).toHaveText('Login');
    }

    async clickButtonSignIn() {
        await this.page.click('button >> text=Entrar');
    }

    async writeUser(user: string) {
        await this.page.fill('#user', user);
    }

    async writePassword(password: string) {
        await this.page.fill('#pass', password);
    }
}