import { Locator, Page } from '@playwright/test';

export class CalendarsPage {
  page: Page;
  path: string;
  calendarsInput: Locator;
  dateOfMonths: Locator;
  submitButton: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.calendarsInput = this.page.locator('input[data-format]');
    this.submitButton = this.page.getByRole('button', { name: 'Submit' });
  }

  async selectDate() {
    await this.calendarsInput.click();
  }
  async dateOfMonthsClick(day: number) {
    await this.page.locator('button', { hasText: new RegExp(`^${day}$`) }).click(); //
  }
  async submitButtonClick() {
    await this.submitButton.click();
  }
}
