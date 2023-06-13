const Hero = require('../../models/hero-model');

const { HttpError } = require('../../helpers');

const updateContact = async (request, response) => {
  const { id } = request.params;
  const result = await Hero.findByIdAndUpdate(id, request.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  response.json(result);
};

module.exports = updateContact;
