import { Order } from '../entity/Order'
import OrderDetails from '../entity/OrderDetails'
import Payment from '../entity/Payment'

export interface IOrderRepository {
  save(payments: Payment[], ordersDetails: OrderDetails[]): Promise<Order>
}
