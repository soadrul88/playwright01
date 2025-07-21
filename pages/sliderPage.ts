import { Locator, Page } from '@playwright/test';

export class SliderPage {
  page: Page;
  path: string;
  currentValue: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.currentValue = this.page.locator('#value');
  }

  async moveSlider(targetValue: string) {
    await this.page.locator('#slideMe').fill(targetValue);
  }
}
