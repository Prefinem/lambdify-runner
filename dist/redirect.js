"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.redirect = void 0;

var _response = _interopRequireDefault(require("./response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Redirect to a url
 * Lambda Proxy - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html
 *
 * @function
 * @since 3.1.0
 * @category runner
 * @param {String} url The url to be redirected too
 * @param {Tnt} statusCode The status code sent in the response which defaults to 302
 * @returns {Object} Lambda Proxy response object
 * @example
 *
 *
 * import { redirect } from 'lambdify';
 *
 * exports.handler = (event, context) => context.succeed(
 * 	redirect('https://google.com')
 * );
 *
 */
const redirect = (url, statusCode = 302) => (0, _response.default)(null, 'text/html', {
  headers: {
    Location: url
  },
  statusCode
});

exports.redirect = redirect;
var _default = redirect;
exports.default = _default;