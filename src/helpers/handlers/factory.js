import statusCodes from 'http-status-codes';

export default class Factory {
  responseCommand({ response, command }) {
    this.body = command.body || null;
    this.status = command.status || statusCodes.OK;

    return response.status(this.status).send(this.body);
  }
}
