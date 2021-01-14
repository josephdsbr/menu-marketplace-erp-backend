import OrderDTOBuilder from '../../entity/builders/OrderDTOBuilder'
import OrderDTO from '../../entity/dtos/OrderDTO'
import OrderDetails from '../../entity/OrderDetails'
import Payment from '../../entity/Payment'
import IOrderDetailsRepository from '../../repositories/IOrderDetailsRepository'
import { IOrderRepository } from '../../repositories/IOrderRepository'
import HandlePaymentUseCase from '../HandlePayment/HandlePaymentUseCase'

class HandleOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
    private orderDetailsRepository: IOrderDetailsRepository<OrderDetailsDTO>,
    private handlePayment: HandlePaymentUseCase
  ) {}

  execute(data: OrderDTO): OrderDTO {
    let ordersDetails: OrderDetails[]
    let order
    this.orderDetailsRepository
      .save(data.getOrderDetails())
      .then((result) => (ordersDetails = result))
    const payments: Payment[] = data
      .getPayments()
      .map((payment) => this.handlePayment.execute(payment))
    this.orderRepository
      .save(payments, ordersDetails)
      .then((result) => (order = result))
    return OrderDTOBuilder.fromEntity(order)
  }
}

export default HandleOrderUseCase
