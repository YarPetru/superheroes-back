const express = require('express');

const controller = require('../../controllers/heroes');
const heroSchema = require('../../schemes/hero-schema');
const { validateBody } = require('../../middlewares');

const router = express.Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', validateBody(heroSchema), controller.createHero);

router.put('/:id', validateBody(heroSchema), controller.updateHero);

router.delete('/:id', controller.deleteHero);

module.exports = router;
