const { Router } = require('express');
const appRouter = Router();
const appController = require('../controllers/appController.js');

appRouter.get('/', appController.showHome)

module.exports = appRouter;