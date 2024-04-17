import { test, expect } from "@playwright/test";

test("demo login test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page.pause();
  await page.locator('input[placeholder="Enter your username"]').fill("Philip");
  await page
    .locator('input[placeholder="Enter your password"]')
    .fill("YourPassword");
  await page.locator('a:has-text("Sign in")').click();
});

test.only("Orange HRM login Test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.pause();
  await page.locator('input[placeholder="Username"]').fill("Admin");
  await page.locator('input[placeholder="Password"]').fill("admin123");
  await page.click('button:has-text("Login")');
});


// import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').press('CapsLock');
  await page.getByPlaceholder('Username').fill('A');
  await page.getByPlaceholder('Username').press('CapsLock');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator(".oxd-userdropdown-tab").filter({ name: 'Logout' }).click();
  //.getByRole('[role="menu"]').filter({ hasText: 'Logout' })
//await page.getByRole('menuitem', { name: 'Logout' }).click();
});