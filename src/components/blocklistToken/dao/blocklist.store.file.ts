import { IBlockListStore } from '@types'

class BlockListFile implements IBlockListStore {
  async addToBlockList(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      reject(`No implementado`)
    })
  }

  async isInBlockList(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      reject(`No implementado`)
    })
  }
}

export default new BlockListFile()
