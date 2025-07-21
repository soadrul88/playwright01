import { Locator, Page } from '@playwright/test';
import path from 'path';

export class PracticeFormPage {
  page: Page;
  path: string;
  nameInput: Locator;
  lastNameInput: Locator;
  eMailInput: Locator;
  phoneInput: Locator;
  subjectInput: Locator;
  uploadButton: Locator;
  addressInput: Locator;
  selectStateInput: Locator;
  selectCityInput: Locator;
  buttonSubmit: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.nameInput = this.page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = this.page.getByRole('textbox', { name: 'Last Name' });
    this.eMailInput = this.page.getByRole('textbox', { name: 'name@example.com' });
    this.phoneInput = this.page.getByRole('textbox', { name: 'Mobile Number' });
    this.subjectInput = this.page.locator('#subjectsInput');
    this.uploadButton = this.page.getByRole('button', { name: 'Select picture' });
    this.addressInput = this.page.getByRole('textbox', { name: 'Current Address' });
    this.selectStateInput = this.page.locator(`//*[.='Select State']//./input`);
    this.selectCityInput = this.page.locator(`//*[.='Select City']//./input`);
    this.buttonSubmit = this.page.getByRole('button', { name: 'Submit' });
  }

  async fillNameInput(name: string) {
    await this.nameInput.fill(name);
  }

  async fillLastNameInput(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async filleMailInput(eMail: string) {
    await this.eMailInput.fill(eMail);
  }

  async fillphoneInput(phone: string) {
    await this.phoneInput.fill(phone);
  }

  async selectGender(genderType: string) {
    await this.page.locator(`//*[.="${genderType}"]//./input`).click({ force: true });
  }

  async fillsubjectInput(subject: string) {
    await this.subjectInput.fill(subject);
    await this.page.getByText('Loading...').waitFor({ state: 'detached' }); //waitFor({ state: 'detached' }) - ожидание до того как пропадеть хуйня
    await this.page
      .locator('[class^="subjects-auto-complete"]')
      .locator('div', { hasText: subject })
      .last()
      .click();
  }

  async selectHobbies(hobbies: string) {
    await this.page.locator(`//*[.="${hobbies}"]//./input`).click({ force: true });
  }

  async upLoadFile(fileName: string) {
    await this.uploadButton.setInputFiles(path.join(__dirname + '/../resources', fileName));
    await this.page.waitForTimeout(1500);
  }

  async fillAddressInput(address: string) {
    await this.addressInput.fill(address);
  }

  async selectState(state: string) {
    await this.selectStateInput.click({ force: true });
    await this.page.getByText(state, { exact: true }).click();
  }

  async selectCity(city: string) {
    await this.selectCityInput.click({ force: true });
    await this.page.getByText(city, { exact: true }).click();
  }

  async clickSubmit() {
    await this.buttonSubmit.click();
    await this.page.waitForTimeout(1500);
  }

  async getValuesText() {
    const values = await this.page.locator('table td:nth-of-type(2)').all(); //все что справа запечатано в values
    const valuesText: string[] = [];
    for (const locator of values) {
      const text = await locator.innerText();
      valuesText.push(text);
    }
    return valuesText;
  }
}
