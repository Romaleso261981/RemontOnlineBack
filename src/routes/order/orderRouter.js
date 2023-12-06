const express = require('express')
const { ctrlWrapper } = require('../../middlewares/ctrlWrapper')
const { orderController } = require('../../controllers')

const orderRouter = express.Router()

orderRouter.post('/order', ctrlWrapper(orderController.addOrder))

orderRouter.delete('/:orderId', ctrlWrapper(orderController.removeById))
orderRouter.post('/editing/:orderId', ctrlWrapper(orderController.changeOrder))
orderRouter.post('/done/:orderId', ctrlWrapper(orderController.markUsDone))

module.exports = orderRouter
