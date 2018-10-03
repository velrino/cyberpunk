import Cart from '../../repositories/cart';
import Factory from '../../../helpers/handlers/factory';
import GetCartCommand from '../../../domain/commands/cart/get';

export default class GetFactory {
  create({ params, response }) {
    return new Factory({
      response,
      command: new GetCartCommand({ cartRepository: new Cart() }).execute({ params }),
    });
  }
}
