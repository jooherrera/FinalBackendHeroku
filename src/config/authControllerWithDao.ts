import authStoreMongo from '@components/auth/dao/auth.store.mongo'
import authStoreFile from '@components/auth/dao/auth.store.file'

import cartStoreMongo from '@components/cart/dao/cart.store.mongo'
import cartStoreFile from '@components/cart/dao/cart.store.file'

import userStoreMongo from '@components/user/dao/user.store.mongo'
import userStoreFile from '@components/user/dao/user.store.file'

import AuthController from '@components/auth/auth.controller'

import Env from '@config/env'

let authController: AuthController

switch (Env.DATABASENAME) {
  case 'mongo':
    authController = new AuthController(authStoreMongo, cartStoreMongo, userStoreMongo)
    break
  case 'file':
    authController = new AuthController(authStoreFile, cartStoreFile, userStoreFile)
    break

  default:
    authController = new AuthController(authStoreFile, cartStoreFile, userStoreFile)
    break
}

export { authController }
