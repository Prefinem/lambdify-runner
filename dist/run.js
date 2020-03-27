"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.run = exports.catchError = void 0;

var _json = _interopRequireDefault(require("./json"));

var _payload = _interopRequireDefault(require("./payload"));

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildResponsePayload = (response = {}, error) => {
  if (response.body || response.headers || response.statusCode) {
    return response;
  }

  return error ? (0, _json.default)((0, _payload.default)({}, error)) : (0, _json.default)((0, _payload.default)(response));
};

const catchError = errorFN => async (event, context, fn) => {
  try {
    const response = await fn((0, _request.default)(event, context));
    context.succeed(buildResponsePayload(response));
  } catch (error) {
    const response = await errorFN(event, error);
    context.succeed(buildResponsePayload(response, error));
  }
};
/**
 * Processes the AWS Lambda Proxy event, executes a function, and returns a standard Lambdify response
 * Lambda Proxy - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html
 *
 * @function
 * @since 3.1.0
 * @category runner
 * @param {Object} event The AWS Lambda Event
 * @param {Object} context The AWS Lambda Context
 * @param {Function} fn The function you wish to execute
 * @returns {Object} Lambda Proxy response object
 * @example
 *
 *
 * import { run } from 'lambdify';
 *
 * const myFN = (request) => {
 * 	if (request.method === 'POST') {
 * 		return { foo: 'bar' };
 * 	}
 *
 * 	return { foo: 'baz' };
 * }
 *
 * exports.handler = (event, context) => run(event, context, myFN);
 *
 */


exports.catchError = catchError;
const run = catchError((event, error) => console.log(error));
exports.run = run;
var _default = run;
exports.default = _default;