import { IProduct } from '@types'
import Env from '@config/env'

export const newProduct = (info: IProduct): IProduct => {
  return Object.freeze({
    name: info.name,
    description: info.description,
    category: info.category,
    imageURL: `${Env.DIR_PRODUCTS}${info.imageFile?.filename}`,
    price: info.price,
    stock: info.stock,
  })
}
