/* Factories */
import GetCartFactory from '../../factories/cart/get';

module.exports = [
  {
    path: '/cart',
    method: 'get',
    action: GetCartFactory,
  },
];
