import { test } from '../../fixtures';

test('Выбор даты по календарю', async ({ calendarsPage }) => {
  await calendarsPage.selectDate();
  await calendarsPage.page.waitForTimeout(1500);
  await calendarsPage.dateOfMonthsClick(15);
  await calendarsPage.submitButtonClick();
});
