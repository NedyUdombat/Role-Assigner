import { errorResponse, checkDuplicateUser } from '../../utils/helpers';

export const duplicateUserValidation = async (req, res, next) => {
  const { email, username } = req.body;
  const isDuplicate = await checkDuplicateUser(email, username);
  if (isDuplicate) {
    if (isDuplicate.username === username) {
      return errorResponse(
        res,
        409,
        'Sorry, this username has already been taken',
      );
    }
    if (isDuplicate.email === email) {
      return errorResponse(
        res,
        409,
        'Sorry, this email has already been taken',
      );
    }
  }
  return next();
};
