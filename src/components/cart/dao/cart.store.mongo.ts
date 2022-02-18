import { SM } from '@config/handleResp'
import { ICart, ICartStore, IProduct, productForCart } from '@types'
import { Types } from 'mongoose'
import cartModel from '../cart.model'

class CartStoreMongo implements ICartStore {
  async createCart(cart: ICart): Promise<void> {
    try {
      await new cartModel(cart).save()
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[CartStore - createCart]')
    }
  }

  async findById(id: string): Promise<ICart> {
    try {
      const cart = await cartModel.findOne({ authId: id })
      if (cart) {
        return cart
      }
      throw SM.sendMessageError('cartNotFound')
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[CartStore - findById]')
    }
  }

  async addProductToCart(id: string, product: productForCart): Promise<void> {
    try {
      await cartModel.findOneAndUpdate({ authId: id }, { $push: { products: product } })
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[CartStore - addProductToCart]')
    }
  }

  async removeProductFromCart(cart_id: string, _idInCart: string): Promise<void> {
    try {
      const cart = await cartModel.findOneAndUpdate(
        { authId: cart_id },
        { $pull: { products: { _idInCart: _idInCart } } }
      )

      // const updatedCart = cart?.products.findIndex((prod) => String(prod._id) === product_id)
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[CartStore - removeProductFromCart]')
    }
  }

  async deleteAllProducts(cart_id: string): Promise<void> {
    try {
      await cartModel.findOneAndUpdate({ authId: cart_id }, { products: [] })
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[CartStore - deleteAllProducts]')
    }
  }
}

export default new CartStoreMongo()
