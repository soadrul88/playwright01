//Заполнение формы
import { test as base } from '@playwright/test';
import {
  JavaScriptDelaysPage,
  FormFieldsPage,
  PracticeFormPage,
  PopupsPage,
  SliderPage,
  CalendarsPage,
  ModalsPage,
} from '../pages/index';

type MyFixtures = {
  practiceFormPage: PracticeFormPage;
  javaScriptDelaysPage: JavaScriptDelaysPage;
  formFieldsPage: FormFieldsPage;
  popupsPage: PopupsPage;
  sliderPage: SliderPage;
  calendarsPage: CalendarsPage;
  modalsPage: ModalsPage;
};

export const test = base.extend<MyFixtures>({
  practiceFormPage: async ({ page }, use) => {
    const practiceFormPage = new PracticeFormPage(page, '');
    await practiceFormPage.page.goto('https://demoqa.com/automation-practice-form', {
      waitUntil: 'domcontentloaded',
    });
    await use(practiceFormPage);
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
  popupsPage: async ({ page }, use) => {
    const popupsPage = new PopupsPage(page, '');
    await popupsPage.page.goto('https://practice-automation.com/popups/', {
      waitUntil: 'domcontentloaded',
    });
    await use(popupsPage);
  },
  sliderPage: async ({ page }, use) => {
    const sliderPage = new SliderPage(page, '');
    await sliderPage.page.goto('https://practice-automation.com/slider/', {
      waitUntil: 'domcontentloaded',
    });
    await use(sliderPage);
  },
  calendarsPage: async ({ page }, use) => {
    const calendarsPage = new CalendarsPage(page, '');
    await calendarsPage.page.goto('https://practice-automation.com/calendars/', {
      waitUntil: 'domcontentloaded',
    });
    await use(calendarsPage);
  },
  modalsPage: async ({ page }, use) => {
    const modalsPage = new ModalsPage(page, '');
    await modalsPage.page.goto('https://practice-automation.com/modals/', {
      waitUntil: 'domcontentloaded',
    });
    await use(modalsPage);
  },
});
