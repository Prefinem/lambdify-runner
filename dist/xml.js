"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.xml = void 0;

var _response = _interopRequireDefault(require("./response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an XML AWS Lambda proxy response payload
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
 * import { xml } from 'lambdify';
 *
 * exports.handler = (event, context) => context.succeed(
 * 	xml('<response>Hello World</response>')
 * );
 *
 */
const xml = (body, options) => (0, _response.default)(`${body}`, 'text/xml', options);

exports.xml = xml;
var _default = xml;
exports.default = _default;