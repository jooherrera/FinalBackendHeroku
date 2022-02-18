import Env from '@config/env'
import { IEnvironment } from '@types'
import ServerExpress from './server'

const initServer = async () => {
  let environment: IEnvironment = {
    port: Number(Env.PORT),
    environmentName: Env.NAME,
    dataBase: Env.DATABASE,
    dataBaseName: String(Env.DATABASENAME),
    dirProductImages: Env.DIR_PRODUCTS,
    dirAvatarImages: Env.DIR_AVATAR,
  }
  const server = new ServerExpress(environment)
  server.start()
}

initServer()
