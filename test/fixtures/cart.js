import faker from 'faker';
import mockProduct from './product';

export default {
  cartUid: faker.random.uuid(),
  status: faker.random.number({ max: 1, min: 9 }),
  products: [mockProduct],
};
