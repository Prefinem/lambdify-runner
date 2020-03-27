/**
 * Creates a lambdify payload for standard responses
 *
 * @function
 * @since 3.1.0
 * @category runner
 * @param {Object|Array|String} body The response being sent back to the client
 * @param {Error} body An error if one occured
 * @returns {Object} Lambdify response object
 * @example
 *
 *
 * import { payload } from 'lambdify';
 *
 * exports.handler = (event, context) => context.succeed(payload({ foo: 'bar' }));
 *
 */

export const payload = (body, error) => {
	const response = {
		debug: error ? error.stack : '',
		message: error ? error.message : '',
		name: process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.name || 'no_name',
		payload: body,
		status: error ? 'error' : 'success',
		timestamp: Math.floor(Date.now() / 1000),
	};

	if (error) {
		response.error = JSON.parse(JSON.stringify(error));
	}

	return response;
};

export default payload;
