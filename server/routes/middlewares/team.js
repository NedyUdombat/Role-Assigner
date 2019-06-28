import {
  errorResponse,
  checkDuplicateTeam,
  getTeamById,
} from '../../utils/helpers';

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

export const checkTeamExistence = async (req, res, next) => {
  const { id } = req.params;
  req.team = await getTeamById(id);
  if (!req.team) return errorResponse(res, 404, 'Team not found');
  return next();
};
