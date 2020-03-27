"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.request = void 0;

const get = (record, path, defaultValue) => path.match(/([\0-\x2D\/-Z\\\^-\u{10FFFF}]+)/gu).reduce((result, piece) => result && result[piece], record) || defaultValue;

const parseJSON = json => {
  try {
    return JSON.parse(json);
  } catch (error) {
    return json;
  }
};
/**
 * Creates a lambdify request object to ensure that as the AWS Lambda proxy event changes, the request will stay the same
 *
 * @function
 * @since 3.1.0
 * @category runner
 * @param {Object} event The AWS Lambda event object
 * @param {Object} context The AWS Lambda context object
 * @returns {Object} Lambdify request object
 * @example
 *
 *
 * import { request } from 'lambdify';
 *
 * const intialEvent = { queryStringParameters: { foo : 'bar' } };
 *
 * request(intialEvent);
 * // => { queryParams: { foo: 'bar' } }
 *
 */


const request = (event, context) => ({
  authToken: get(event, 'headers.x-amz-security-token', get(event, 'headers.X-Amz-Security-Token', '')),
  body: parseJSON(get(event, 'body', '{}')),
  context,
  event,
  headers: event.headers,
  ip: get(event, 'headers.X-Forwarded-For', get(event, 'headers.x-forwarded-for', get(event, 'requestContext.identity.sourceIp', ''))).split(',')[0],
  method: get(event, 'requestContext.httpMethod', '').toUpperCase(),
  path: get(event, 'path', ''),
  pathParams: get(event, 'pathParameters', {}),
  queryParams: get(event, 'queryStringParameters', {}),
  s3: {
    bucket: get(event, 'Records.0.s3.bucket.name', ''),
    key: get(event, 'Records.0.s3.object.key', '')
  },
  sns: {
    message: parseJSON(get(event, 'Records.0.Sns.Message', '{}')),
    subject: get(event, 'Records.0.Sns.Subject', '')
  },
  ua: get(event, 'requestContext.identity.userAgent', '')
});

exports.request = request;
var _default = request;
exports.default = _default;