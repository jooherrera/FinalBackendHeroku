import { IPayMethod } from '@types'

export const payMethods = (): IPayMethod => {
  return Object.freeze({
    efectivo: 0.9,
    mercadoPago: 1.1,
  })
}
