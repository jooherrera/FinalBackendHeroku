import { IAuth, IAuthStore, IDataRegister } from '@types'

class AuthStoreFile implements IAuthStore {
  register(data: IDataRegister): Promise<IAuth> {
    return new Promise((resolve, reject) => {
      reject(`Metodo no implementado`)
    })
  }

  isEmailRegistered(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      reject(`Metodo no implementado`)
    })
  }

  findByEmail(email: string): Promise<IAuth> {
    return new Promise((resolve, reject) => {
      reject(`Metodo no implementado`)
    })
  }

  findUserById(id: string): Promise<IAuth> {
    return new Promise((resolve, reject) => {
      reject(`Metodo no implementado`)
    })
  }

  updateStatus(id: string, status: string): Promise<void> {
    return new Promise((resolve, reject) => {
      reject(`Metodo no implementado`)
    })
  }

  delete(): void {}
}
export default new AuthStoreFile()
