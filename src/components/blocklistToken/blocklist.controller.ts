import { SM } from '@config/handleResp'
import { IBlockListStore } from '@types'

class BlackListController {
  private store: IBlockListStore
  constructor(store: IBlockListStore) {
    this.store = store
  }

  async addToBlockList(token: string) {
    try {
      if (await this.store.isInBlockList(token)) {
        throw SM.sendMessageError('alreadyInvalid')
      }
      await this.store.addToBlockList(token)
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[Auth - addToBlockList]')
    }
  }

  async isInBlockList(token: string): Promise<boolean> {
    try {
      return await this.store.isInBlockList(token)
    } catch (error: any) {
      throw new Error(error)
    }
  }
}

export default BlackListController
