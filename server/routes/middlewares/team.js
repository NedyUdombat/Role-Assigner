import { errorResponse, checkDuplicateTeam } from '../../utils/helpers';

export const duplicateTeamValidation = async (req, res, next) => {
  const { name } = req.body;
  const isDuplicate = await checkDuplicateTeam(name);
  if (isDuplicate) {
    if (isDuplicate.name === name) {
      return errorResponse(
        res,
        409,
        'Sorry, this team name has already been taken',
      );
    }
  }
  return next();
};
