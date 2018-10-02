export default class GetCartCommand {
  constructor({ cartRepository }) {    
    this.cartRepository = cartRepository;
  }

  execute() {
    const cart = this.cartRepository.getCart();
    return cart;
  }
}
