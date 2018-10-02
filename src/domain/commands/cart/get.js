import _ from 'lodash';
import statusCodes from 'http-status-codes';
import commandMessages from '../../../helpers/enums/command-messages';
import HandlerCommand from '../../../helpers/handlers/command';

export default class GetCartCommand extends HandlerCommand {
  constructor({ cartRepository }) {
    super();
    this.cartRepository = cartRepository;
  }

  execute() {
    const cart = this.cartRepository.getCart();

    if (_.isEmpty(cart)) {
      return this.emit(commandMessages.cart.notFound, statusCodes.NOT_FOUND);
    }

    return this.emit(cart);
  }
}
