import Joi from 'joi';

const emailSchema = Joi.string()
  .lowercase()
  .trim()
  .email({
    minDomainAtoms: 2,
  });

const passwordSchema = Joi.string()
  .alphanum()
  .min(6);

const options = {
  stripUnknown: true,
};

/**
 * This is the schema definition
 * for a Article.
 */
export const signupSchema = Joi.object()
  .keys({
    fullName: Joi.string().trim(),
    username: Joi.string()
      .alphanum()
      .lowercase()
      .trim()
      .min(3)
      .required(),
    email: emailSchema.required(),
    password: passwordSchema.required(),
  })
  .options({ ...options });

export const loginSchema = Joi.object()
  .keys({
    email: emailSchema.required(),
    password: passwordSchema.required(),
  })
  .options({ ...options });
