// import model from '../models';

/**
 * randomize
 * @param {object} req
 * @param {object} res
 * @returns {string} string
 */
export const randomizer = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'random',
  });
};
