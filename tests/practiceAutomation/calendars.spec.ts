import { test } from '../../fixtures';

test('awdawdaw', async ({ calendarsPage }) => {
  await calendarsPage.selectDate();
  await calendarsPage.page.waitForTimeout(1500);
  await calendarsPage.dateOfMonthsClick(15);
  await calendarsPage.submitButtonClick();
});
