import {
  generateToken,
  successResponse,
  serverError,
  comparePassword,
  excludeProperty,
  errorResponse,
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

/**
 * Create A User
 * @param {object} req
 * @param {object} res
 * @returns {object} user object
 */
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user === null) {
      return errorResponse(
        res,
        404,
        'This User does not exist please try registering',
      );
    }
    const validPassword = await comparePassword(user.password, password);
    if (!validPassword) {
      return errorResponse(res, 400, 'Incorrect Password');
    }
    const token = await generateToken({
      id: user.id,
      email,
    });

    const userJSON = user.toJSON();
    const authenticatedUser = excludeProperty(userJSON, ['password']);
    return successResponse(res, 200, 'You have been logged in successfully', {
      authenticatedUser,
      token,
    });
  } catch (error) {
    return serverError(res);
  }
};
