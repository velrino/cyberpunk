import Cart from '../../repositories/cart';
import GetCartCommand from '../../../domain/commands/cart/get';

export default class GetFactory {
    action(request, response) {
        const instanceCommand = new GetCartCommand({ cartRepository: new Cart() });
        const result = instanceCommand.execute(request);

        return response.send(result);
    }
};
