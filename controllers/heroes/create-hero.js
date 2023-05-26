const Hero = require('../../models/superhero');

const create = async (request, response) => {
  const result = await Hero.create(request.body);
  response.status(201).json(result);
};

module.exports = create;
