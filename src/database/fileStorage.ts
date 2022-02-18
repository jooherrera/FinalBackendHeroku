import { IDataBase } from '@types'

class FileStorage implements IDataBase {
  constructor() {}
  connect(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log('Utilizando File Storage')
      resolve(true)
    })
  }
}

export default FileStorage
