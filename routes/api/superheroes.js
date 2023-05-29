const express = require('express');

const controller = require('../../controllers/heroes');
const heroSchema = require('../../schemes/hero-schema');
const { validateBody, isValidId, upload } = require('../../middlewares');

const router = express.Router();

router.get('/', controller.getAll);

router.get('/:id', isValidId, controller.getById);

router.post('/', upload.any(), validateBody(heroSchema), controller.createHero);

router.put('/:id', isValidId, upload.any(), validateBody(heroSchema), controller.updateHero);

router.delete('/:id', isValidId, controller.deleteHero);

module.exports = router;
