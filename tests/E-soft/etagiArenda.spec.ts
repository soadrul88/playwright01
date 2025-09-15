import { test } from '../../fixtures';

test('Проверка фильтра', async ({ etagiArendaPage }) => {
  await etagiArendaPage.language();
  await etagiArendaPage.apartmentsPick();
  await etagiArendaPage.bedroomsPick();
});
