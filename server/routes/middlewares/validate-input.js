import validator from '../../utils/validator.utils';
import { userSchema } from '../../utils/validation-schema.utils';

/**
 * Input validator for a new user account
 * @param {Object} req - request body
 * @param {Object} res - response object
 * @param {Object} next - pass control to the next handler
 * @returns {Object} Validator helper function
 */
export const validateNewUser = (req, res, next) => {
  validator(req.body, userSchema, res, next);
};
