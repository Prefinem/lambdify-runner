"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.parsePayload = void 0;

/**
 * Parses a payload from a lambdify response
 *
 * @function
 * @since 3.1.0
 * @category runner
 * @param {Object} payload The lambda payload (generated by lambdify-runner).
 * @returns {Object} This is the payload response being returned by the lambda function
 * @example
 *
 *
 * // Lambda Function
 * import { runner } from 'lambdify';
 *
 * exports.handler = (event, context) => runner({ foo: 'bar' });
 *
 *
 * // Client Side Code
 * const response = await fetch('/lambda-function');
 *
 * parsePayload(repsonse);
 * // => { foo: 'bar' }
 *
 */
const parsePayload = ({
  errorMessage,
  message,
  payload,
  status
}) => {
  if (errorMessage) {
    throw new Error(errorMessage);
  } else if (status && status === 'error') {
    throw new Error(message);
  }

  return payload;
};

exports.parsePayload = parsePayload;
var _default = parsePayload;
exports.default = _default;