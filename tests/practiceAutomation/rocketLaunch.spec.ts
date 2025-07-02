import { expect } from '@playwright/test';
import { test } from '../../fixtures';

test('Отправка ракеты по кнопке "Start"', async ({ javaScriptDelaysPage }) => {
  await javaScriptDelaysPage.clickStart();
  await javaScriptDelaysPage.waitForLiftOff();
  expect(javaScriptDelaysPage.liftOff).toBeVisible();
});
