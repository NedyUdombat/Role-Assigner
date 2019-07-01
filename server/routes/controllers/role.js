import {
  successResponse,
  serverError,
  getFullTeamDetails,
  errorResponse,
  getEligibleTeamMembers,
} from '../../utils/helpers';
import models from '../../db/models';

const { Member } = models;

export const getTeamLead = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await getEligibleTeamMembers(id);
    if (!team) {
      return errorResponse(
        res,
        404,
        'There are no eligible teamleads, please click the rest button to strat again',
      );
    }
    const { members } = team;
    const teamLead = members[Math.floor(Math.random() * members.length)];
    teamLead.current_team_lead = true;

    const currentTL = await Member.findOne({
      where: { current_team_lead: true, teamId: id },
    });
    if (currentTL) {
      await Member.update(
        {
          past_team_lead: true,
          current_team_lead: false,
        },
        { where: { id: currentTL.id } },
      );
    }
    await Member.update(
      {
        current_team_lead: true,
      },
      { where: { id: teamLead.id } },
    );
    return successResponse(res, 200, 'TeamLead successfully retrieved', {
      teamLead,
    });
  } catch (error) {
    return serverError(res);
  }
};

export const resetRoles = async (req, res) => {
  const { id } = req.params;
  try {
    const reset = await Member.update(
      { current_team_lead: false, past_team_lead: false },
      { where: { teamId: id } },
      { returning: true },
    );
    return successResponse(res, 200, 'Team successfully reset', {
      reset,
    });
  } catch (error) {
    return serverError(res);
  }
};
