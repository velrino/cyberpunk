import { EntitySchema } from 'typeorm';
import Carts from '../model/Cart';

export default new EntitySchema({
  name: 'Carts',
  target: Carts,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
  },
  relations: {
    products: {
      target: 'Product',
      type: 'many-to-many',
      joinTable: true,
      cascade: true,
      columns: {
        count: {
          type: 'int',
        },
      },
    },
  },
});
