import chatStoreMongo from '@components/chat/dao/chat.store.mongo'
import Env from '@config/env'
import ChatController from '@components/chat/chat.controller'

let chatController: ChatController

switch (Env.DATABASENAME) {
  case 'mongo':
    chatController = new ChatController(chatStoreMongo)
    break

  default:
    chatController = new ChatController(chatStoreMongo)
    break
}

export { chatController }
