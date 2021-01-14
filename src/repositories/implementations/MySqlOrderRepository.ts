import { Order } from '../../entity/Order'
import { IOrderRepository } from '../IOrderRepository'
import { getRepository } from 'typeorm'
import OrderDTOBuilder from '../../entity/builders/OrderDTOBuilder'
import Payment from '../../entity/Payment'
import OrderDetails from '../../entity/OrderDetails'

class MySqlOrderRepository implements IOrderRepository {
  async save(
    payments: Payment[],
    ordersDetails: OrderDetails[]
  ): Promise<Order> {
    const order = OrderDTOBuilder.toEntityWithPaymentAndOrder(
      payments,
      ordersDetails
    )
    return await getRepository(Order).save(order)
  }
}

export default MySqlOrderRepository
