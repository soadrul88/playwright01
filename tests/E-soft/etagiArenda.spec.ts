import { test } from '../../fixtures';

test('Проверка фильтра', async ({ etagiArendaPage }) => {
  await etagiArendaPage.language();
  //await etagiArendaPage.apartmentsPick();
  await etagiArendaPage.bedroomsPick();
  await etagiArendaPage.bedroomsPickArea();
  await etagiArendaPage.page.waitForTimeout(1500);
});
