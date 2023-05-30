const Hero = require('../../models/hero-model');

const getAll = async (request, response) => {
  const { page = 1, limit = 5 } = request.query;
  const skip = (page - 1) * limit;
  const result = await Hero.find({}, '-createdAt -updatedAt', {
    skip,
    limit: Number(limit),
  });
  response.json(result);
};

module.exports = getAll;
