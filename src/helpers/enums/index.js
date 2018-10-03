export default {
  cartStatus: {
    CANCELED: 3,
    DELETED: 4,
    NEW: 1,
    PAID: 2,
  },
  message: Object.freeze({
    cart: {
      notFound: {
        message: 'cart.notFound',
        code: '0001',
      },
    },
  }),
};
