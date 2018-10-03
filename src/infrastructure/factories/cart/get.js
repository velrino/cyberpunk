import Cart from '../../repositories/cart';
import Factory from '../../../helpers/handlers/factory';
import GetCartCommand from '../../../domain/commands/cart/get';

export default class GetFactory extends Factory {
  create({ params, response }) {
    return this.responseCommand({
      response,
      command: new GetCartCommand({ cartRepository: new Cart() }).execute({ params }),
    });
  }
}
