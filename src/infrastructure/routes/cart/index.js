/* Factories */
import GetCartFactory from '../../factories/cart/get';

module.exports = [
  {
    path: '/cart/:cartUid',
    method: 'get',
    factory: new GetCartFactory(),
  },
];
