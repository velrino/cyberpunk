import { EntitySchema } from 'typeorm';
import { Products } from '../model/Product';

export default new EntitySchema({
  name: 'Products',
  target: Products,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    price: {
      type: 'float',
    },
    img: {
      type: 'text',
    },
  },
});
