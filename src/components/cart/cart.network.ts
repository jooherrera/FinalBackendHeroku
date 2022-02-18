import { cartController } from '@config/cartControllerWithDao'
import { authUser, checkUserID } from '@middlewares/auth'
import { Router } from 'express'

const NetworkCart = Router()

NetworkCart.use(authUser)
// NetworkCart.use(checkUserID)

NetworkCart.get('/:id', checkUserID, cartController.findCartById)

NetworkCart.post('/:id', checkUserID, cartController.addProduct)

NetworkCart.patch('/:id', checkUserID, cartController.removeProduct)

NetworkCart.delete('/:id', checkUserID, cartController.deleteAllProducts)

export { NetworkCart }
