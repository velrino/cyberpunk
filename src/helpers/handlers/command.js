import statusCode from 'http-status-codes';

export default class Command {
  emit(body, status = statusCode.OK) {
    return { body, status };
  }
}
