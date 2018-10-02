import faker from 'faker';

export default {
  price: faker.random.number({ max: 100, min: 9999 }),
  productUid: faker.random.uuid(),
  promotion: faker.random.boolean(),
  quantity: faker.random.number({ max: 1, min: 99 }),
};
