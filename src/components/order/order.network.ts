import { orderController } from '@config/orderControllerWithDao'
import { authUser, checkStatus, checkUserID } from '@middlewares/auth'
import { Router } from 'express'

const NetworkOrder = Router()
NetworkOrder.use(authUser)
NetworkOrder.post('/:id', checkUserID, checkStatus, orderController.generateOrder)

NetworkOrder.get('/:id', checkUserID, orderController.getAllOrder)

export { NetworkOrder }
