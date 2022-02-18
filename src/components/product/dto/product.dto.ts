import { IProduct, IProductDTO, I_ID } from '@types'
import { Types } from 'mongoose'

class ProductDTO {
  private _id: I_ID | undefined
  private info: IProductDTO

  constructor(data: IProduct) {
    this._id = data._id
    this.info = {
      name: data.name,
      description: data.description,
      category: data.category,
      imageURL: data.imageURL,
      price: data.price,
      stock: data.stock,
    }
  }
}

export default ProductDTO
