const Cart = require('./repositories/Cart');
const CartProduct = require('./repositories/CartProduct');

module.exports = [{
  path: '/carts',
  method: 'get',
  action: Cart.list,
},
{
  path: '/carts/:id',
  method: 'get',
  action: Cart.show,
},
{
  path: '/carts',
  method: 'post',
  action: Cart.create,
},
{
  path: '/carts/:id',
  method: 'delete',
  action: Cart.delete,
},
{
  path: '/carts/:id/product/:id',
  method: 'post',
  action: CartProduct.add,
},
{
  path: '/carts/:id/product/:id',
  method: 'put',
  action: CartProduct.update,
},
{
  path: '/carts/:id/product/:id',
  method: 'delete',
  action: CartProduct.remove,
},
];
