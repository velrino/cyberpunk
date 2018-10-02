import CartEntity from '../../../src/infrastructure/entities/cart';
import ENUMS from '../../../src/helpers/enums';
import mockCart from '../../fixtures/cart';

describe('GetCartCommand', () => {
  describe('statusCanProceed()', () => {
    test('Cart with status NEW can proceed', (done) => {
      const cart = Object.assign(mockCart, { status: ENUMS.cartStatus.NEW });
      const cartEntity = new CartEntity(cart);
      const result = cartEntity.statusCanProceed();
      expect(result).toBeTruthy();
      done();
    });
    test('Cart with status CANCELED can not proceed', (done) => {
      const cart = Object.assign(mockCart, { status: ENUMS.cartStatus.CANCELED });
      const cartEntity = new CartEntity(cart);
      const result = cartEntity.statusCanProceed();
      expect(result).toBeFalsy();
      done();
    });
  });
  describe('statusCanNotProceed()', () => {
    test('Cart with status NEW can proceed', (done) => {
      const cart = Object.assign(mockCart, { status: ENUMS.cartStatus.NEW });
      const cartEntity = new CartEntity(cart);
      const result = cartEntity.statusCanNotProceed();
      expect(result).toBeFalsy();
      done();
    });
    test('Cart with status CANCELED can not proceed', (done) => {
      const cart = Object.assign(mockCart, { status: ENUMS.cartStatus.CANCELED });
      const cartEntity = new CartEntity(cart);
      const result = cartEntity.statusCanNotProceed();
      expect(result).toBeTruthy();
      done();
    });
  });
});
