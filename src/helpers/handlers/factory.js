import statusCodes from 'http-status-codes';

export default class Handlers {
  constructor({ response, command }) {
    this.body = command.body || null;
    this.status = command.status || statusCodes.OK;
    response.status(this.status).json(this.body);
  }
}
