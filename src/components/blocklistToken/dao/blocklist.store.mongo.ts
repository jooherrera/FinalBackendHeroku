import { IBlockListStore } from '@types'
import blockListModel from '../blockList.model'

class BlockListMongo implements IBlockListStore {
  async addToBlockList(token: string): Promise<void> {
    const blockToken = new blockListModel({ token })
    await blockToken.save()
  }

  async isInBlockList(token: string): Promise<boolean> {
    const blockToken = await blockListModel.exists({ token })
    return blockToken ? true : false
  }
}

export default new BlockListMongo()
