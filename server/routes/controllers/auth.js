import {
  generateToken,
  successResponse,
  serverError,
} from '../../utils/helpers';
import models from '../../db/models';

const { User } = models;

/**
 * Create A User
 * @param {object} req
 * @param {object} res
 * @returns {object} user object
 */
export const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const tokenPayload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };
    const token = await generateToken(tokenPayload);
    return successResponse(
      res,
      201,
      'Welcome your account has been succssfully created',
      {
        token,
      },
    );
  } catch (err) {
    return serverError(res);
  }
};
