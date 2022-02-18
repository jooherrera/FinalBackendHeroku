import { SM } from '@config/handleResp'
import { IParam, IProduct, IProductStore } from '@types'
import productModel from '../product.model'

class ProductStoreMongo implements IProductStore {
  async add(product: IProduct): Promise<void> {
    try {
      await new productModel(product).save()
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[ProductStore - add]')
    }
  }

  async findAll(): Promise<IProduct[]> {
    try {
      return await productModel.find()
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[ProductStore - findAll]')
    }
  }

  async findByParam(param: IParam): Promise<IProduct | IProduct[]> {
    try {
      const product = await productModel.find(param)

      if (!product.length) {
        throw SM.sendMessageError('productNotFound')
      } else {
        return product
      }
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[ProductStore - findByParam]')
    }
  }

  async update(id: string, productFields: IProduct): Promise<void> {
    try {
      await productModel.findByIdAndUpdate({ _id: id }, productFields)
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[ProductStore - update]')
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await productModel.findByIdAndDelete({ _id: id })
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[ProductStore - delete]')
    }
  }

  async findProductById(id: string): Promise<IProduct> {
    try {
      const product = await productModel.findById(id)

      if (!product) {
        throw SM.sendMessageError('productNotFound')
      } else {
        return product
      }
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[ProductStore - findProductById]')
    }
  }

  async updateStock(id: string, qty: number): Promise<void> {
    try {
      await productModel.findByIdAndUpdate({ _id: id }, { $inc: { stock: -qty } })
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[ProductStore - updateStock]')
    }
  }
}

export default new ProductStoreMongo()
