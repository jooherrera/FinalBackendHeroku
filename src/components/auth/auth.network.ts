import { Router } from 'express'
import { authController } from '@config/authControllerWithDao'
import { addTokenToBlockList, authUser } from '@middlewares/auth'

const NetworkAuth = Router()



NetworkAuth.post('/register', authController.register)


NetworkAuth.post('/login', authController.login)

NetworkAuth.get('/logout', addTokenToBlockList, authController.logOut)

export { NetworkAuth }
