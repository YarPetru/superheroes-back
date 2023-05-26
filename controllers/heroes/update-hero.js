const Hero = require('../../models/superhero');

const { HttpError } = require('../../helpers');

const updateContact = async (request, response) => {
  const { id } = request.params;
  const result = await Hero.findByIdAndUpdate(id, request.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  response.json(result);
};

module.exports = updateContact;
