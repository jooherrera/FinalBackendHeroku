import { Router } from 'express'
import { authUser, checkUserID } from '@middlewares/auth'
import { userController } from '@config/userControllerWithDao'
import { uploadAvatar } from '@middlewares/upload'

const NetworkUser = Router()

NetworkUser.use(authUser)

NetworkUser.get('/:id', checkUserID, userController.show)

NetworkUser.patch('/:id', checkUserID, uploadAvatar, userController.update)

export { NetworkUser }
