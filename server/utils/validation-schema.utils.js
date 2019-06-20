import Joi from 'joi';

/**
 * This is the schema definition
 * for a Article.
 */
export const userSchema = Joi.object()
  .keys({
    fullName: Joi.string().trim(),
    username: Joi.string()
      .alphanum()
      .lowercase()
      .trim()
      .min(3)
      .required(),
    email: Joi.string()
      .lowercase()
      .trim()
      .email({
        minDomainAtoms: 2,
      })
      .required(),
    password: Joi.string()
      .alphanum()
      .min(6)
      .required(),
  })
  .options({ stripUnknown: true });
