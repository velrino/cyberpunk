const { baseEvents } = require('architecture-code-structure');
const httpStatusEnum = require('./http-status-enum');
/**
 * HTTP methods that can have body attribute
 */
const HTTP_METHODS_WITH_BODY = ['PATCH', 'POST', 'PUT'];

/**
 * It's a bridge between the domain layer and the Express
 * @example
 * class MyHandler extends ExpressHandler {};
 */
module.exports = class ExpressHandler {
  /**
    * Initialize a ExpressHandler instance with the an specific domain command
    * @param {Object} request - The Express request https://expressjs.com/en/4x/api.html#req
    * @param {Object} response - The Express response https://expressjs.com/en/4x/api.html#res
    * @param {Object} command - an Command instance
    */
  constructor(request, response, command) {
    /**
     * @param {Object} request - The Express request https://expressjs.com/en/4x/api.html#req
     */
    this.request = request;
    /**
     * @param {Object} response - The Express response https://expressjs.com/en/4x/api.html#res
     */
    this.response = response;
    /**
     * @param {Object} command - an Command instance
     */
    this.command = command;
  }

  /**
   * A HTTP statuses getter
   * @return {object} a dictionary with the common HTTP statuses
   */
  static get httpStatus() {
    return httpStatusEnum;
  }

  /**
   * Invoke the command execute method, setting up the default listeners and
   * handling an exception if occurred
   */
  async handle() {
    try {
      this.setupListeners(this.command);
      await this.command.execute(this.buildInput());
    } catch (error) {
      this.response.status(ExpressHandler.httpStatus.internalServerError);
      this.response.json(error.toString());
    }
  }

  /**
   * @private
   */
  buildInput() {
    const paramsSources = [this.request.query, this.request.params];

    if (HTTP_METHODS_WITH_BODY.includes(this.request.method)) {
      paramsSources.unshift(this.request.body);
    }

    return Object.assign({}, ...paramsSources);
  }

  /**
   * Handles the default events and can be overrided to handle additional events
   * @param {Object} command - an Command instance
   */
  setupListeners(command) {
    command.on(baseEvents.success, this.onSuccess.bind(this));
    command.on(baseEvents.validationFailed, this.onValidationFailed.bind(this));
    command.on(baseEvents.notFound, this.onNotFound.bind(this));
  }

  /**
   * Default behavior when an event not found occurs
   */

  onNotFound() {
    this.response.status(ExpressHandler.httpStatus.notFound);
    this.response.json(null);
  }


  /**
   * Default behavior when an event success occurs
   * @param {Object} data - the data returned by the command instance
   */
  onSuccess(data) {
    this.response.status(ExpressHandler.httpStatus.ok);
    this.response.json(data);
  }

  /**
   * Default behavior when an event validationFailed occurs
   * @param {Object} errors - the errors returned by the command instance
   */
  onValidationFailed(errors) {
    this.response.status(ExpressHandler.httpStatus.unprocessableEntity);
    this.response.json(errors);
  }
};
