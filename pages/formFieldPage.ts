import { Locator, Page } from '@playwright/test';

export class FormFieldsPage {
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
    this.nameInput = this.page.getByRole('textbox', { name: 'Name' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    this.eMailInput = this.page.getByRole('textbox', { name: 'Email' });
    this.buttonSubmit = this.page.getByRole('button', { name: 'Submit' });
    this.questionInput = this.page.getByTestId('automation');
    this.messageInput = this.page.getByRole('textbox', { name: 'Message' });
    this.buttonSubmit = this.page.getByRole('button', { name: 'Submit' });
  }
  async fillNameInput(name: string) {
    await this.nameInput.fill(name);
  }

  async fillPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async filleMailInput(eMail: string) {
    await this.eMailInput.fill(eMail);
  }

  async selectDrink(drinkNames: string[]) {
    for (const drink of drinkNames) {
      await this.page.getByRole('checkbox', { name: drink }).setChecked(true); //setChecked - фуекция для работы с чекбоксом, которая включает или выключает чекбокс
    }
  }

  async selectColor(color: string) {
    await this.page.locator(`//label[.='${color}']`).click();
  }

  async fillMessageInput(message: string) {
    await this.messageInput.fill(message);
  }

  async clickSubmit() {
    await this.buttonSubmit.click();
  }
}
