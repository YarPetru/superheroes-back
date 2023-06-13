const Hero = require('../../models/hero-model');

const createHero = async (request, response) => {
  const result = await Hero.create(request.body);
  response.status(201).json(result);
};

module.exports = createHero;
