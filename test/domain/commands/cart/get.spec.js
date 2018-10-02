import GetCartCommand from '../../../../src/domain/commands/cart/get';
import CartRepository from '../../../../src/infrastructure/repositories/cart';
import mockCart from '../../../fixtures/cart';

const getCartCommand = new GetCartCommand({ cartRepository: new CartRepository() });

describe('GetCartCommand', () => {
  describe('Execute()', () => {
    test('Return Cart object', (done) => {
      const result = getCartCommand.execute();
      expect(result.body).toMatchObject(mockCart);
      expect(result.status).toBe(null);
      done();
    });
  });
});
