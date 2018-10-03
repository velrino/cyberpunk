import _ from 'lodash';
import Joi from 'joi';
import uuid from 'uuid/v4';
import ENUMS from '../../helpers/enums';

const rulesCart = Joi.object().keys({
  cartUid: Joi.string().guid().optional().allow(null),
  status: Joi.number().required(),
});

export default class Cart {
  constructor({
    cartUid,
    status,
    totalCart,
  }) {
    this.cartUid = cartUid || uuid();
    this.status = status || ENUMS.cartStatus.NEW;
    this.totalCart = totalCart || 0;
  }

  isValid() {
    return Joi.validate(this, rulesCart).error === null;
  }

  statusCanProceed() {
    return [
      ENUMS.cartStatus.NEW,
    ].includes(this.status);
  }

  statusCanNotProceed() {
    return [
      ENUMS.cartStatus.CANCELED,
      ENUMS.cartStatus.DELETED,
    ].includes(this.status);
  }

  static calculateTotalCart(cart) {
    const totalCart = _.sumBy(cart.products, product => (product.price * product.quantity));
    return Object.assign(cart, { totalCart });
  }
}
