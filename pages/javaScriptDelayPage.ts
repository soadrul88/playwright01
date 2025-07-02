import { Locator, Page } from '@playwright/test';

export class JavaScriptDelaysPage {
  page: Page;
  path: string;
  buttonStart: Locator;
  liftOff: Locator;
  rocketOff: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.buttonStart = this.page.getByRole('button', { name: 'Start' });
    this.liftOff = this.page.locator('#delay', { hasText: 'Liftoff!' });
    this.rocketOff = this.page.getByAltText('liftoff');
  }
  async clickStart() {
    await this.buttonStart.click();
    await this.page.waitForTimeout(1500);
  }
  async waitForLiftOff() {
    await this.liftOff.waitFor();
  }
}
