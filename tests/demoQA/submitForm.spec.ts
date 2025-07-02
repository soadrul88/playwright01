import { expect } from '@playwright/test';
import { test } from '../../fixtures';

test('Заполнение формы и её отправка', async ({ pacticeFormPage }) => {
  await pacticeFormPage.fillNameInput('Илья');
  await pacticeFormPage.fillLastNameInput('Полищук');
  await pacticeFormPage.filleMailInput('soadrul@mail.ru');
  await pacticeFormPage.selectGender('Male');
  await pacticeFormPage.fillphoneInput('9827807902');
  await pacticeFormPage.fillsubjectInput('Computer Science');
  await pacticeFormPage.selectHobbies('Sports');
  await pacticeFormPage.upLoadFile('1.png');
  await pacticeFormPage.fillAddressInput('Тюмень');
  await pacticeFormPage.selectState('NCR');
  await pacticeFormPage.selectCity('Delhi');
  await pacticeFormPage.clickSubmit();
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const currentMonth = now.toLocaleString('en-En', { month: 'long' });
  const currentYear = now.getFullYear();

  const valuesText = await pacticeFormPage.getValuesText();
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
