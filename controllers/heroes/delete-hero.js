const Hero = require('../../models/hero-model');

const { HttpError } = require('../../helpers');

const deleteHero = async (request, response) => {
  const { id } = request.params;
  const result = await Hero.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  // response.status(204).send()
  response.json({
    message: 'Delete success',
  });
};

module.exports = deleteHero;
