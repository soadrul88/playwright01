import { test } from '../../fixtures';

test('Модалы', async ({ modalsPage }) => {
  const data = {
    name: 'Iliya',
    email: 'soadrul@mail.ru',
    message: 'stay rude',
  };
  await modalsPage.simpleModalClick();
  await modalsPage.waitForSimpleModal();
  await modalsPage.simpleModalCloseClick();
  await modalsPage.formModalClick();
  await modalsPage.waitForFormModal();
  await modalsPage.fillNameInput(data.name);
  await modalsPage.fillEmailInput(data.email);
  await modalsPage.fillMessageInput(data.message);
  await modalsPage.clickSubmit();
});
