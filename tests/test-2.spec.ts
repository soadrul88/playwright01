import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState();
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await page.waitForTimeout(5000);
});
