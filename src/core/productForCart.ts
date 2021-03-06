import { IProduct } from '@types'
import Helper from '@helpers/index'

export const productForCart = (product: IProduct) => {
  return Object.freeze({
    _idInCart: Helper.newMongooseId(),
    producto: String(product._id),
    name: product.name,
    description: product.description,
    price: product.price,
  })
}
