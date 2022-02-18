import { SM } from '@config/handleResp'
import { IOrder, IOrderStore } from '@types'
import orderModel from '../order.model'

class OrderStoreMongo implements IOrderStore {
  async registerOrder(order: IOrder): Promise<void> {
    try {
      await new orderModel(order).save()
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[Order - registerOrder]')
    }
  }

  async getAllOrder(id: string): Promise<IOrder[]> {
    try {
      const order = await orderModel.find({ user: id })
      if (!order) {
        throw SM.sendMessageError('orderNotFound')
      }
      return order
    } catch (error: any) {
      throw SM.sendMessageError('', error, '[Order - getOrder]')
    }
  }
}

export default new OrderStoreMongo()
