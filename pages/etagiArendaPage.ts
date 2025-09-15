import { Locator, Page } from '@playwright/test';

export class EtagiArendaPage {
  page: Page;
  path: string;
  //filterClick: Locator;
  languageClick: Locator;
  apartmentsClick: Locator;
  bedroomsClick: Locator;
  //priceClick: Locator;
  //priceInputFrom: Locator;
  //priceInputTo: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.languageClick = this.page.getByTestId('modal_button_close');
    this.apartmentsClick = this.page.getByRole('button', { name: 'Квартиры' });
    this.bedroomsClick = this.page.locator('span').filter({ hasText: /^3$/ }).first();
  }
  async language() {
    await this.languageClick.click();
  }
  //async filter() {
  //  await this.filterClick.click();
  //}
  async apartmentsPick() {
    await this.apartmentsClick.click();
    await this.page.waitForTimeout(1500);
  }
  async bedroomsPick() {
    await this.bedroomsClick.click();
  }
}
