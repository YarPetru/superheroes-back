const getAll = require('./get-all-heroes');
const getById = require('./get-hero-by-id');
const createHero = require('./create-hero');
const deleteHero = require('./delete-hero');
const updateHero = require('./update-hero');

const { ctrlWrapper } = require('../../helpers');

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  createHero: ctrlWrapper(createHero),
  deleteHero: ctrlWrapper(deleteHero),
  updateHero: ctrlWrapper(updateHero),
};
