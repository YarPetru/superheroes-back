const Hero = require('../../models/hero-model');

const getAll = async (request, response) => {
  const { page, limit } = request.query;
  let result;
  if (!page && !limit) {
    result = await Hero.find({}, '-createdAt -updatedAt');
  } else {
    const skip = (page - 1) * limit;
    result = await Hero.find({}, '-createdAt -updatedAt', {
      skip,
      limit: Number(limit),
    });
  }
  response.json(result);
};

module.exports = getAll;
