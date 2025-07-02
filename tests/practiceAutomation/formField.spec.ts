import { test } from '../../fixtures';

test('Заполнение формы и её отправка', async ({ formFieldsPage }) => {
  const data = {
    name: 'Илья',
    password: '123456789',
    eMail: 'soadrul@mail.ru',
    drinks: ['Water', 'Milk', 'Coffee'],
    color: '#FFC0CB',
    message: 'Im rocketman',
  };
  await formFieldsPage.fillNameInput(data.name);
  await formFieldsPage.fillPasswordInput(data.password);
  await formFieldsPage.filleMailInput(data.eMail);
  await formFieldsPage.selectDrink(data.drinks);
  await formFieldsPage.selectColor(data.color);
  await formFieldsPage.fillMessageInput(data.message);
  await formFieldsPage.clickSubmit();
});
