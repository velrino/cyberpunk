import DB from '../db';
import Cart from '../model/Cart';

export default {
  create(request, response) {
    return DB.create(Cart, request.body)
      .then((created) => {
        response.send(created);
      }).catch(error => error);
  },
  list(request, response) {
    return DB.list(Cart).then((created) => {
      response.send(created);
    });
  },
  show(request, response) {
    return DB.first(Cart, request.params.id).then((result) => {
      response.send(result);
    });
  },
  delete() {
    return {};
  },
  addProduct() {
    return {};
  },
  updateProduct() {
    return {};
  },
  removeProduct() {
    return {};
  },
};
