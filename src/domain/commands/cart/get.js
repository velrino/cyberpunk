import _ from 'lodash';
import statusCodes from 'http-status-codes';
import ENUMS from '../../../helpers/enums';
import cartEntity from '../../../infrastructure/entities/cart';
import HandlerCommand from '../../../helpers/handlers/command';

export default class GetCartCommand extends HandlerCommand {
  constructor({ cartRepository }) {
    super();
    this.cartRepository = cartRepository;
  }

  execute({ params }) {
    let cart = this.cartRepository.getCart(params.cartUid);

    if (_.isEmpty(cart)) {
      return this.emit(ENUMS.message.cart.notFound, statusCodes.NOT_FOUND);
    }

    cart = cartEntity.calculateTotalCart(cart);
    return this.emit(cart, statusCodes.OK);
  }
}
