const Hero = require('../../models/hero-model');

const { HttpError } = require('../../helpers');

const getById = async (request, response) => {
  const { id } = request.params;
  const result = await Hero.findById(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  response.json(result);
};

module.exports = getById;
