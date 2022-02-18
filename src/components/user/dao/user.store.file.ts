import { dataForUpdate, IDataRegister, IEmptyUser, IUserStore, IUserWithID } from '@types'

class UserStoreFile implements IUserStore {
  findUser(authID: string): Promise<IUserWithID> {
    return new Promise((resolve, reject) => {
      reject(`Metodo no implementado`)
    })
  }

  registerUser(emptyUser: IEmptyUser): Promise<IUserWithID> {
    return new Promise((resolve, reject) => {
      reject(`Metodo no implementado`)
    })
  }

  updateUser(authId: string, data: dataForUpdate, avatarUrl: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      reject(`Metodo no implementado`)
    })
  }
  // register(data: IDataRegister): Promise<IUserWithID> {
  //   return new Promise((resolve, reject) => {
  //     reject(`Metodo no implementado`)
  //   })
  // }

  // isEmailRegistered(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     reject(`Metodo no implementado`)
  //   })
  // }

  // findByEmail(email: string): Promise<IUserWithID> {
  //   return new Promise((resolve, reject) => {
  //     reject(`Metodo no implementado`)
  //   })
  // }

  // findUserById(id: string): Promise<IUserWithID> {
  //   return new Promise((resolve, reject) => {
  //     reject(`Metodo no implementado`)
  //   })
  // }

  // delete(): void {}
}

export default new UserStoreFile()
