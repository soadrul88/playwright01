import { test as base } from '@playwright/test';
import { BasePage } from '../pages/basePage';

type MyFixtures = {
  basePage: BasePage;
};

export const test = base.extend<MyFixtures>({
  basePage: async ({ page }, use) => {
    const defaultPage = new BasePage(page, '');
    await defaultPage.page.goto('https://demoqa.com/automation-practice-form', {
      waitUntil: 'domcontentloaded',
    });
    await use(defaultPage);
  },
});

/////////////////////////////////////////////

import { Locator, Page } from '@playwright/test';
import { BillingBasePage } from './base-page';
import { Button } from '@platform-v/ui-autotest-shared-lib';

export class BillingControlPage extends BillingBasePage {
  columnSettingsModal: Locator;
  importMetricsButton: Locator;
  importAllDataButton: Locator;

  constructor(page: Page, pathName: string, baseURL: string) {
    super(page, pathName, baseURL);
    this.columnSettingsModal = this.page.locator('');
    this.importMetricsButton = this.page
      .locator('tr', { hasText: 'Метрики' })
      .getByRole('button')
      .first();
    this.importAllDataButton = this.page
      .locator('div', { hasText: 'Импортировать все данные' })
      .getByRole('button')
      .first();
  }
  getButtonByRowName(name: string): Locator {
    return this.page.locator('tr', { hasText: name }).getByRole('button').first();
  }
}
