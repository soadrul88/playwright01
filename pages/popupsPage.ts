import { Locator, Page } from '@playwright/test';

export class PopupsPage {
  page: Page;
  path: string;
  nameInput: Locator;
  passwordInput: Locator;
  eMailInput: Locator;
  drinkClick: Locator;
  setColor: Locator;
  buttonSubmit: Locator;
  getValuesText: any;
  questionInput: Locator;
  messageInput: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
  }
}
