import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';

import models from '../db/models';

const { User, Team } = models;

const SECRET_KEY = process.env.SECRET_KEY;

/**
 *
 *
 * @export
 * @param {string} password
 * @param {number} [salt=10]
 * @returns {string} hash
 */
export const hashPassword = async (password, salt = 10) => {
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

/**
 *
 *
 * @export
 * @param {string} hashedPassword
 * @param {string} password
 * @returns {boolean} true/false
 */
export const comparePassword = async (hashedPassword, password) =>
  bcrypt.compareSync(password, hashedPassword);

/**
 *
 *
 * @export
 * @param {*} payload
 * @param {string} [expiresIn='30days']
 * @returns {string} token
 */
export const generateToken = async (payload, expiresIn = '30days') =>
  jwt.sign(payload, SECRET_KEY, { expiresIn });

/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @param {string} message
 * @param {*} data
 * @returns {object} res
 */
export const successResponse = (res, statusCode, message, data) =>
  res.status(statusCode).json({
    status: 'success',
    message,
    data,
  });

/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @param {string} message
 * @param {*} errors
 * @returns {object} res
 */
export const errorResponse = (res, statusCode, message, errors) =>
  res.status(statusCode).json({
    status: 'error',
    message,
    errors,
  });

/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @returns {object} res
 */
export const serverError = (res, statusCode = 500) =>
  res.status(statusCode).json({
    status: 'error',
    message:
      'Your request could not be processed at this time. Kindly try again later.',
  });

/**
 * Check User duplication
 *
 * @param {String} email
 * @param {String} username
 * @returns {Boolean} true if record exists
 * @returns {Boolean} false if record does not exist
 */
export const checkDuplicateUser = async (email, username) => {
  return await User.findOne({
    where: {
      [Op.or]: [
        {
          email,
        },
        {
          username,
        },
      ],
    },
  });
};

/**
 * Check Team duplication
 *
 * @param {String} name
 * @returns {Boolean} true if record exists
 * @returns {Boolean} false if record does not exist
 */
export const checkDuplicateTeam = async name => {
  return await Team.findOne({
    where: { name },
  });
};

/**
 *
 *
 * @param {object} obj
 * @param {array} keys
 * @returns {object} filteredObject
 */
export function pick(obj, keys) {
  return keys
    .map(key => (key in obj ? { [key]: obj[key] } : {}))
    .reduce(
      (finalObject, arrayOfObjects) =>
        Object.assign(finalObject, arrayOfObjects),
      {},
    );
}

/**
 *
 *
 * @param {object} obj
 * @param {array} keys
 * @returns {object} filteredObject
 */
export function excludeProperty(obj, keys) {
  const filteredKeys = Object.keys(obj).filter(key => !keys.includes(key));
  return pick(obj, filteredKeys);
}

/**
 *
 * @param {string} token
 * @returns {object/null} decoded tokens
 */
export const verifyToken = async token => {
  return await jwt.verify(token, SECRET_KEY, (err, data) => {
    if (err) {
      return null;
    }
    return data;
  });
};
