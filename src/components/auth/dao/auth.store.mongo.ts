import { SM } from '@config/handleResp'
import { IAuth, IAuthStore, IDataRegister } from '@types'
import authModel from '../auth.model'

class AuthStoreMongo implements IAuthStore {
  async register(info: IDataRegister): Promise<IAuth> {
    return new Promise(async (resolve, reject) => {
      try {
        const newAuth = new authModel(info)
        resolve(await newAuth.save())
      } catch (error: any) {
        reject(SM.sendMessageError('', error, '[Store - register]'))
      }
    })
  }

  async isEmailRegistered(email: string): Promise<boolean> {
    try {
      const emailRegistered = await authModel.exists({ email })
      return emailRegistered ? true : false
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[Store - isEmailRegistered]')
    }
  }

  async findByEmail(email: string): Promise<IAuth> {
    try {
      const userID = await authModel.exists({ email })
      const userInfo = await authModel.findById(userID)

      if (!userInfo) {
        throw SM.sendMessageError('userNotFound')
      }
      return userInfo
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[Store - findByEmail]')
    }
  }

  async findUserById(id: string): Promise<IAuth> {
    try {
      const user = await authModel.findById({ _id: id })

      if (!user) {
        throw SM.sendMessageError('userNotFound')
      }
      return user
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[Store - findUserById]')
    }
  }

  async updateStatus(id: string, status: string) {
    try {
      await authModel.findOneAndUpdate({ _id: id }, { status: status })
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[Store - updateStatus]')
    }
  }

  delete(): void {}
}

export default new AuthStoreMongo()
