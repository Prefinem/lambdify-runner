"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.json = void 0;

var _response = _interopRequireDefault(require("./response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an JSON AWS Lambda proxy response payload
 * Lambda Proxy - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html
 *
 * @function
 * @since 3.1.0
 * @category runner
 * @param {Object} body The response being sent back to the client
 * @param {Object} options Any options that should be merged into the final response
 * @returns {Object} Lambda Proxy response object
 * @example
 *
 *
 * import { json } from 'lambdify';
 *
 * exports.handler = (event, context) => context.succeed(
 * 	json({ foo: 'bar' })
 * );
 *
 */
const json = (body, options) => (0, _response.default)(JSON.stringify(body, null, 4), 'application/json', options);

exports.json = json;
var _default = json;
exports.default = _default;