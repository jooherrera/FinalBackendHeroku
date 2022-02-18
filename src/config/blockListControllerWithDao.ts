import blocklistStoreMongo from '@components/blocklistToken/dao/blocklist.store.mongo'
import blocklistStoreFile from '@components/blocklistToken/dao/blocklist.store.file'
import BlockListController from '@components/blocklistToken/blocklist.controller'

import Env from '@config/env'

let blockListController: BlockListController

switch (Env.DATABASENAME) {
  case 'mongo':
    blockListController = new BlockListController(blocklistStoreMongo)
    break
  case 'file':
    blockListController = new BlockListController(blocklistStoreFile)
    break
  default:
    break
}

export { blockListController }
