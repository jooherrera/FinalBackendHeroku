import { ICart, ICartDto } from '@types'

class CartDTO {
  private userCart: ICartDto = { user: '', products: [] }
  constructor(cart: ICart) {
    this.userCart.user = cart.authId
    this.userCart.products = cart.products
  }
}

export default CartDTO
