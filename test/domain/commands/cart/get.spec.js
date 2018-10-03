import statusCode from 'http-status-codes';
import ENUMS from '../../../../src/helpers/enums';
import GetCartCommand from '../../../../src/domain/commands/cart/get';
import cartRepository from '../../../infrastructure/repositories/cart';
import cartRepositoryNotFound from '../../../infrastructure/repositories/cart-not-found';
import mockCart from '../../../fixtures/cart';

const getCartCommand = new GetCartCommand({ cartRepository });
const getCartCommandNotFound = new GetCartCommand({ cartRepository: cartRepositoryNotFound });

const { cartUid } = mockCart;
const params = { cartUid };

describe('GetCartCommand', () => {
  describe('Execute()', () => {
    test('Return Cart object', (done) => {
      const result = getCartCommand.execute({ params });
      expect(result.body).toMatchObject(mockCart);
      expect(result.status).toBe(statusCode.OK);
      done();
    });
    test('Return message when cart not found with status 404', (done) => {
      const result = getCartCommandNotFound.execute({ params });
      expect(result.body).toMatchObject(ENUMS.message.cart.notFound);
      expect(result.status).toBe(statusCode.NOT_FOUND);
      done();
    });
  });
});
