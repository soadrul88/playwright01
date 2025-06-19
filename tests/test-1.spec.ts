import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

const elements = [
  {
    locator: (page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo link',
    text: 'Playwright',
    attribute: {
      type: 'href',
      value: '/',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs link',
    text: 'Docs',
    attribute: {
      type: 'href',
      value: '/docs/intro',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'API' }),
    name: 'API link',
    text: 'API',
    attribute: {
      type: 'href',
      value: '/docs/api/class-playwright',
    },
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Node.js' }),
    name: 'Node.js button',
    text: 'Node.js',
    attribute: {
      type: 'href',
      value: '/',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Community' }),
    name: 'Community link',
    text: 'Community',
    attribute: {
      type: 'href',
      value: '/community/welcome',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'GitHub repository icon',
    text: 'GitHub repository',
    attribute: {
      type: 'href',
      value: 'https://github.com/microsoft/playwright',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Discord server' }),
    name: 'Discord server icon',
    text: 'Discord server',
    attribute: {
      type: 'href',
      value: 'https://aka.ms/playwright/discord',
    },
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Lightmode icon',
    text: 'Lightmode',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Search (Ctrl+K)' }),
    name: 'Search input',
    text: 'Search',
  },
];

test.describe('Группировка тестов в общую группу', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
  test('Отображение элементов навигации хедера', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Проверка отображения элемента ${name}`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    });
  });
  test('Тест корректности названий хедера', async ({ page }) => {
    elements.forEach(({ locator, text, name }) => {
      test.step(`Проверка названия элемента ${name}`, async () => {
        await expect(page.getByLabel('Main', { exact: true }).locator('b')).toContainText(
          'Playwright',
        );
      });
    });
  });
  // нужно добавить if
  test('Тест проверки атрибута href навигации хедера', async ({ page }) => {
    elements.forEach(({ locator, attribute, name }) => {
      test.step(`Проверка атрибута href элемента ${name}`, async () => {
        await expect(page.getByLabel('Main', { exact: true }).locator('b')).toContainText(
          'Playwright',
        );
      });
    });
  });
  test('Тест проверки переключения светлой и темной темы', async ({ page }) => {
    await page.waitForLoadState();
    await page.getByRole('button', { name: 'Switch between dark and light' }).click();
    await page.getByRole('button', { name: 'Switch between dark and light' }).click();
    // await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
  test('Тест проверки заголовка страницы', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
      'Playwright enables reliable end-to-end testing for modern web apps.',
    );
  });
  test('Тест проверки кнопки GET STARTED', async ({ page }) => {
    await expect.soft;
    await expect(page.getByRole('banner')).toContainText('Get started');
    //await page.getByRole('link', { name: 'Get started' }).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });
});
