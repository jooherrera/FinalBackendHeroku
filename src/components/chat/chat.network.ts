import { Router } from 'express'
import { chatController } from '@config/chatControllerWithDao'
import { authUser, checkUserEmail } from '@middlewares/auth'

const NetworkChat = Router()


NetworkChat.get('/', chatController.showChatView)

NetworkChat.get('/:emailParam', chatController.getUserChat)
export { NetworkChat }
