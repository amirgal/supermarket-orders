// implemet routes:

// REST API
// GET /orders -> return list of orders
// GET /orders/:id -> return order with id :id
// DELETE /orders/:id -> remove orders with id :id
// PUT /orders -> create new order and return new id
// POSt /orders/:id
const Router = require('express-router');
const routerContorller = require('./ordersController.js')
const ordersRouter = new Router('/orders');

ordersRouter.get('/', routerContorller.getList)
ordersRouter.get('/:id', routerContorller.getOrderById)


module.exports = ordersRouter;