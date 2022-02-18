import { ICart } from '@types'

export const newOrder = (userId: string, cart: ICart) => {
  return Object.freeze({
    user: userId,
  })
}
