import { test, expect } from '@playwright/test';

import LoginPage from '../Pages/login';

test('test', async ({ page }) => {
    const Login = new LoginPage(page);

    await Login.navigateToLoginPage();
    await Login.login('tomsmith', 'SuperSecretPassword!');
    await Login.logOut();



//  await page.goto('https://the-internet.herokuapp.com/login');
// await page.getByLabel('Username').click();
// await page.getByLabel('Username').fill('tomsmith');
// await page.getByLabel('Password').click();
// await page.getByLabel('Password').fill('SuperSecretPassword!');
// await page.getByRole('button', { name: 'Login' }).click();
//  playwright.assert(await page.textContent('You logged into a secure area')).click();
 



// await page.getByRole('link', { name: 'Logout' }).click();

});

// test('test 2', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/login');
//     await page.getByLabel('Username').click();
//     await page.getByLabel('Username').fill('tomsmith');
//     await page.getByLabel('Password').click();
//     await page.getByLabel('Password').press('CapsLock');
//     await page.getByLabel('Password').fill('S');
//     await page.getByLabel('Password').press('CapsLock');
//     await page.getByLabel('Password').fill('Super');
//     await page.getByLabel('Password').press('CapsLock');
//     await page.getByLabel('Password').fill('SuperS');
//     await page.getByLabel('Password').press('CapsLock');
//     await page.getByLabel('Password').fill('SuperSecret');
//     await page.getByLabel('Password').press('CapsLock');
//     await page.getByLabel('Password').fill('SuperSecretP');
//     await page.getByLabel('Password').press('CapsLock');
//     await page.getByLabel('Password').fill('SuperSecretPassword!');
//     await page.getByRole('button', { name: ' Login' }).click();
//     await page.getByRole('link', { name: 'Logout' }).click();
//     await page.locator('html').click();
//     await page.locator('html').click();
//   });
