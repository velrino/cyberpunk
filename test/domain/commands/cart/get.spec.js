import GetCartCommand from '../../../../src/domain/commands/cart';
import CartRepository from '../../../../src/infrastructure/repositories/cart';

const getCartCommand = new GetCartCommand(new CartRepository());

describe('GetCartCommand', () => {
  describe('Execute()', () => {
    test('Return Cart object', async (done) => {
      const result = await getCartCommand.execute();
      expect(result).toBe(Object);
      done();
    });
  });
});
