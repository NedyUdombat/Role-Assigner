import Joi from 'joi';

import { userSchema } from '../../utils/validation-schema.utils';
import { errorResponse } from '../../utils/helpers';

/**
 * Input validator for a request body
 * @param {Object} schema Joi schema of ther request body to validation
 * @returns {Object} error response
 */
export const validateReqBody = schema => (req, res, next) => {
  const { error } = Joi.validate(req.body, schema, {
    abortEarly: false,
    language: {
      key: '{{key}} ',
    },
  });

  if (error) {
    const validationError = error.details.map(errorItem => errorItem.message);
    return errorResponse(res, 422, 'validation error', validationError);
  }
  next();
};
