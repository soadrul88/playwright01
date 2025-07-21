import { expect } from '@playwright/test';
import { test } from '../../fixtures';

test('Заполнение формы и её отправка', async ({ practiceFormPage }) => {
  const data = {
    name: 'Илья',
    lastName: 'Полищук',
    eMail: 'soadrul@mail.ru',
    gender: 'Male',
    phone: '9827807902',
    subject: 'Computer Science',
    hobbies: 'Sports',
    upLoadFile: '1.png',
    address: 'Тюмень',
    state: 'NCR',
    city: 'Delhi',
  };
  await practiceFormPage.fillNameInput(data.name);
  await practiceFormPage.fillLastNameInput(data.lastName);
  await practiceFormPage.filleMailInput(data.eMail);
  await practiceFormPage.selectGender(data.gender);
  await practiceFormPage.fillphoneInput(data.phone);
  await practiceFormPage.fillsubjectInput(data.subject);
  await practiceFormPage.selectHobbies(data.hobbies);
  await practiceFormPage.upLoadFile(data.upLoadFile);
  await practiceFormPage.fillAddressInput(data.address);
  await practiceFormPage.selectState(data.state);
  await practiceFormPage.selectCity(data.city);
  await practiceFormPage.clickSubmit();
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const currentMonth = now.toLocaleString('en-En', { month: 'long' });
  const currentYear = now.getFullYear();

  const valuesText = await practiceFormPage.getValuesText();
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
