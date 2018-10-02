import statusCode from 'http-status-codes';
import commandMessages from '../../../../src/helpers/enums/command-messages';
import GetCartCommand from '../../../../src/domain/commands/cart/get';
import cartRepository from '../../../infrastructure/repositories/cart';
import cartRepositoryNotFound from '../../../infrastructure/repositories/cart-not-found';
import mockCart from '../../../fixtures/cart';

const getCartCommand = new GetCartCommand({ cartRepository });
const getCartCommandNotFound = new GetCartCommand({ cartRepository: cartRepositoryNotFound });

describe('GetCartCommand', () => {
  describe('Execute()', () => {
    test('Return Cart object', (done) => {
      const result = getCartCommand.execute();
      expect(result.body).toMatchObject(mockCart);
      expect(result.status).toBe(statusCode.OK);
      done();
    });
    test('Return message when cart not found with status 404', (done) => {
      const result = getCartCommandNotFound.execute();
      expect(result.body).toMatchObject(commandMessages.cart.notFound);
      expect(result.status).toBe(statusCode.NOT_FOUND);
      done();
    });
  });
});
