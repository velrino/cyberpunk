import faker from 'faker';

export default {
  cartUid: faker.random.uuid(),
  status: faker.random.number({ max: 1, min: 9 }),
  products: new Array(5).fill(null).map(() => ({
    price: faker.random.number({ max: 10, min: 99 }),
    productUid: faker.random.uuid(),
    promotion: faker.random.boolean(),
    quantity: faker.random.number({ max: 1, min: 9 }),
  })),
};
