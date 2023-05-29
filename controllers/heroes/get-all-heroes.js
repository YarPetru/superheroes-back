const Hero = require('../../models/hero-model');

const getAll = async (_, response) => {
  const result = await Hero.find({}, '-createdAt -updatedAt');
  response.json(result);
};

// async (req, res) => {
//   const { _id: owner } = req.user;
//   const { page = 1, limit = 10 } = req.query;
//   const skip = (page - 1) * limit;
//   const result = await Hero.find({ owner }, '-createdAt -updatedAt', {
//     skip,
//     limit: Number(limit),
//   }).populate('owner', 'email');
//   res.json(result);
// };

module.exports = getAll;
