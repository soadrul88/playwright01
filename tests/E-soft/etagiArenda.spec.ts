import { test } from '../../fixtures';

test('Проверка фильтра', async ({ etagiArendaPage }) => {
  const data = {
    priceFrom: '10000',
    priceTo: '30000',
  };
  await etagiArendaPage.language();
  await etagiArendaPage.apartmentsPick();
  await etagiArendaPage.bedroomsPick();
  await etagiArendaPage.bedroomsPickArea();
  await etagiArendaPage.page.waitForTimeout(1500);
  await etagiArendaPage.pricePick();
  await etagiArendaPage.priceFrom(data.priceFrom);
  await etagiArendaPage.priceTo(data.priceTo);
  await etagiArendaPage.filter();
  await etagiArendaPage.longTerm();
  await etagiArendaPage.showCount();
});
