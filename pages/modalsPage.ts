import { Locator, Page } from '@playwright/test';

export class ModalsPage {
  page: Page;
  path: string;
  simpleModal: Locator;
  simpleModalOpen: Locator;
  simpleModalClose: Locator;
  formModal: Locator;
  formModalOpen: Locator;
  nameInput: Locator;
  emailInput: Locator;
  messageInput: Locator;
  buttonSubmit: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.simpleModal = this.page.getByRole('button', { name: 'Simple Modal' });
    this.simpleModalOpen = this.page.locator('#popmake-1318');
    this.simpleModalClose = this.page.getByRole('button', { name: 'Close' });
    this.formModal = this.page.getByRole('button', { name: 'Form Modal' });
    this.formModalOpen = this.page.locator('#popmake-674');
    this.nameInput = this.page.getByRole('textbox', { name: 'Name' });
    this.emailInput = this.page.getByRole('textbox', { name: 'Email' });
    this.messageInput = this.page.getByRole('textbox', { name: 'Message' });
    this.buttonSubmit = this.page.getByRole('button', { name: 'Submit' });
  }
  async simpleModalClick() {
    await this.simpleModal.click();
  }
  async waitForSimpleModal() {
    await this.simpleModalOpen.waitFor();
  }
  async simpleModalCloseClick() {
    await this.simpleModalClose.click();
  }
  async formModalClick() {
    await this.formModal.click();
  }
  async waitForFormModal() {
    await this.formModalOpen.waitFor();
  }
  async fillNameInput(name: string) {
    await this.nameInput.fill(name);
  }

  async fillEmailInput(email: string) {
    await this.emailInput.fill(email);
  }

  async fillMessageInput(message: string) {
    await this.messageInput.fill(message);
  }
  async clickSubmit() {
    await this.buttonSubmit.click();
    await this.page.waitForTimeout(1500);
  }
}
