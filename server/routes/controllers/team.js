import {
  successResponse,
  errorResponse,
  serverError,
} from '../../utils/helpers';
import models from '../../db/models';

const { Team, Member } = models;

export const create = async (req, res) => {
  const { name, members } = req.body;
  const { id } = req.user;
  try {
    const teamName = await Team.create({
      name,
      userId: id,
    });
    members.forEach(member => (member.teamId = teamName.id));
    const teamMembers = await Member.bulkCreate(members, {
      returning: true,
    });
    return successResponse(res, 201, 'Team successfully created', {
      teamName,
      teamMembers,
    });
  } catch (error) {
    return serverError(res);
  }
};

export const getTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findOne({
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: Member,
          as: 'members',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
    });
    if (!team) return errorResponse(res, 404, 'Team not found');
    return successResponse(res, 200, 'Team successfully retrieved', team);
  } catch (error) {
    return serverError(res);
  }
};
