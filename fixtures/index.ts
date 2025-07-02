//Заполнение формы
import { test as base } from '@playwright/test';
import { JavaScriptDelaysPage, FormFieldsPage, PacticeFormPage, PopupsPage } from '../pages/index';

type MyFixtures = {
  pacticeFormPage: PacticeFormPage;
  javaScriptDelaysPage: JavaScriptDelaysPage;
  formFieldsPage: FormFieldsPage;
  popupsPage: PopupsPage;
};

export const test = base.extend<MyFixtures>({
  pacticeFormPage: async ({ page }, use) => {
    const pacticeFormPage = new PacticeFormPage(page, '');
    await pacticeFormPage.page.goto('https://demoqa.com/automation-practice-form', {
      waitUntil: 'domcontentloaded',
    });
    await use(pacticeFormPage);
  },
  javaScriptDelaysPage: async ({ page }, use) => {
    const javaScriptDelaysPage = new JavaScriptDelaysPage(page, '');
    await javaScriptDelaysPage.page.goto('https://practice-automation.com/javascript-delays/', {
      waitUntil: 'domcontentloaded',
    });
    await use(javaScriptDelaysPage);
  },
  formFieldsPage: async ({ page }, use) => {
    const formFields = new FormFieldsPage(page, '');
    await formFields.page.goto('https://practice-automation.com/form-fields/', {
      waitUntil: 'domcontentloaded',
    });
    await use(formFields);
  },
});
