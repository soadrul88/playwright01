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
  longTermButton: Locator;
  showCountButton: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.languageClick = this.page.getByTestId('modal_button_close');
    this.apartmentsClick = this.page.getByRole('button', { name: 'Квартиры' });
    this.bedroomsClickArea = this.page.locator('span').filter({ hasText: /^3$/ }).first();
    this.bedroomsClick = this.page.getByRole('button', { name: 'Комнатность' });
    this.priceClick = this.page.getByRole('button', { name: 'Стоимость, ₽' });
    this.priceInputFrom = this.page.getByRole('textbox', { name: 'Стоимость от' });
    this.priceInputTo = this.page.locator('span').getByRole('textbox', { name: 'до' });
    this.filterClick = this.page.getByTestId('main_filter_extended_filter_button');
    this.longTermButton = this.page.locator('span').filter({ hasText: 'Длительный срок' }).first();
    this.showCountButton = this.page.getByTestId('button_show_count');
  }
  async language() {
    await this.languageClick.click();
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
  async pricePick() {
    await this.priceClick.click();
    await this.page.waitForTimeout(1500);
  }
  async priceFrom(priceFrom: string) {
    await this.priceInputFrom.fill(priceFrom);
    await this.page.waitForTimeout(1500);
  }
  async priceTo(priceTo: string) {
    await this.priceInputTo.fill(priceTo);
    await this.page.waitForTimeout(1500);
  }
  async filter() {
    await this.filterClick.click();
    await this.page.waitForTimeout(1500);
  }
  async longTerm() {
    await this.longTermButton.click();
    await this.page.waitForTimeout(3000);
  }
  async showCount() {
    await this.showCountButton.click();
  }
}
