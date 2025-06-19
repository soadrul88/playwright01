import { expect } from '@playwright/test';
import { test } from './fixtures/fixtures';

test('test', async ({ basePage }) => {
  await basePage.fillNameInput('Илья');
  await basePage.fillLastNameInput('Полищук');
  await basePage.filleMailInput('soadrul@mail.ru');
  await basePage.selectGender('Male');
  await basePage.fillphoneInput('9827807902');
  await basePage.fillsubjectInput('Computer Science');
  await basePage.selectHobbies('Sports');
  await basePage.upLoadFile('1.png');
  await basePage.fillAddressInput('Тюмень');
  await basePage.selectState('NCR');
  await basePage.selectCity('Delhi');
  await basePage.clickSubmit();
  const now = new Date();
  const day = now.getDate();
  const currentMonth = now.toLocaleString('en-En', { month: 'long' });
  const currentYear = now.getFullYear();

  const valuesText = await basePage.getValuesText();
  expect(valuesText).toEqual([
    'Илья Полищук',
    'soadrul@mail.ru',
    'Male',
    '9827807902',
    `${day} ${currentMonth},${currentYear}`,
    'Computer Science',
    'Sports',
    '1.png',
    'Тюмень',
    'NCR Delhi',
  ]);
});
