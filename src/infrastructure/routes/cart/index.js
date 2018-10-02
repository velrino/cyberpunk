/* Factories */
import GetCartFactory from '../../factories/cart/get';

const newGetCartFactory = new GetCartFactory();

module.exports = [
  {
    path: '/cart',
    method: 'get',
    action: newGetCartFactory.action,
  },
];
