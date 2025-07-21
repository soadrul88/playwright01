import { expect } from '@playwright/test';
import { test } from '../../fixtures';

test('Тест работы слайдера', async ({ sliderPage }) => {
  const targetValue = '88';
  await sliderPage.moveSlider(targetValue);
  expect(sliderPage.currentValue).toHaveText(targetValue);
});
