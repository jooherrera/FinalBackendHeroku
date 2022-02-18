import { ICart } from '@types'
import { Types } from 'mongoose'

export const newCart = (id: Types.ObjectId): ICart => {
  return Object.freeze({
    authId: String(id),
    products: [],
  })
}
