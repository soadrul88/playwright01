import { Locator, Page } from '@playwright/test';

export class EtagiArendaPage {
  page: Page;
  path: string;
  filterClick: Locator;
  languageClick: Locator;
  apartmentsClick: Locator;
  bedroomsClick: Locator;
  bedroomsClickArea: Locator;
  priceClick: Locator;
  priceInputFrom: Locator;
  priceInputTo: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.languageClick = this.page.getByTestId('modal_button_close');
    this.apartmentsClick = this.page.getByRole('button', { name: 'Квартиры' });
    this.bedroomsClickArea = this.page.locator('span').filter({ hasText: /^3$/ }).first();
    this.bedroomsClick = this.page.getByRole('button', { name: 'Комнатность' });
    this.priceClick = this.page.getByRole('button', { name: 'Комнатность' });
    this.priceInputFrom = this.page.getByRole('button', { name: 'Комнатность' });
    this.priceInputTo = this.page.getByRole('button', { name: 'Комнатность' });
    this.filterClick = this.page.getByRole('button', { name: 'Фильтры' });
  }
  async language() {
    await this.languageClick.click();
  }
  async filter() {
    await this.filterClick.click();
    await this.page.waitForTimeout(1500);
  }
  async apartmentsPick() {
    await this.apartmentsClick.click();
  }
  async bedroomsPick() {
    await this.bedroomsClick.click();
  }
  async bedroomsPickArea() {
    await this.bedroomsClickArea.click();
  }
}
