export default class GetCartCommand {
  execute(request, response) {
    return response.send({ hello: 'word' });
  }
}
