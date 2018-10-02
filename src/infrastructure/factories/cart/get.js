import Cart from '../../repositories/cart';
import Factory from '../../../helpers/handlers/factory';
import GetCartCommand from '../../../domain/commands/cart/get';

export default class GetFactory {
  create(request, response) {
    const instanceCommand = new GetCartCommand({ cartRepository: new Cart() });
    const command = instanceCommand.execute(request);

    return new Factory({ response, command });
  }
}
