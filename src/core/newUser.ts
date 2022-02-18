import Env from '@config/env'
import { Types } from 'mongoose'

export const newUser = (authId: Types.ObjectId) => {
  return Object.freeze({
    authId: authId,
    avatar: `${Env.DIR_AVATAR}default.png`,
    info: {
      name: '',
      lastName: '',
      address: '',
      phone: '',
    },
  })
}
