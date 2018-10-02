import faker from 'faker';
import mockProduct from './product';

export default {
  cartUid: faker.random.uuid(),
  products: [mockProduct],
};
