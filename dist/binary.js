"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.binary = void 0;

var _response = _interopRequireDefault(require("./response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an Binary AWS Lambda proxy response payload
 * Lambda Proxy - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html
 *
 * @function
 * @since 3.1.0
 * @category runner
 * @param {Object} body The response being sent back to the client
 * @param {String} type The Content-Type being sent back
 * @param {Object} options Any options that should be merged into the final response
 * @returns {Object} Lambda Proxy response object
 * @example
 *
 *
 * import { binary } from 'lambdify';
 *
 * exports.handler = (event, context) => context.succeed(
 * 	binary(fs.readFileSync('image.png').toString('base64'), 'image/png')
 * );
 *
 */
const binary = (body, type, options) => (0, _response.default)(body, type, { ...options,
  binary: true
});

exports.binary = binary;
var _default = binary;
exports.default = _default;