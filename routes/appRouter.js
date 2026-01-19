const { Router } = require('express');
const appRouter = Router();
const appController = require('../controllers/appController.js');

appRouter.get('/', appController.showHome)
appRouter.get('/products', appController.inStockProducts)
appRouter.get('/lowStock', appController.showLowStock)

module.exports = appRouter;