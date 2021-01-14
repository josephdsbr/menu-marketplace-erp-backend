import OrderDTO from '../dtos/OrderDTO'
import { Order } from '../Order'
import { OrderDetails } from '../OrderDetails'
import { Payment } from '../Payment'
import OrderDetailsDTOBuilder from './OrderDetailsDTOBuilder'
import PaymentDTOBuilder from './PaymentDTOBuilder'

class OrderDTOBuilder {
  static fromEntity = (entity: Order): OrderDTO => {
    return new OrderDTO()
      .setOrderDetails(
        OrderDetailsDTOBuilder.fromEntities(entity.ordersDetails)
      )
      .setPayments(PaymentDTOBuilder.fromEntities(entity.payments))
  }

  static toEntityWithPaymentAndOrder(
    payments: Payment[],
    ordersDetails: OrderDetails[]
  ): Order {
    const order = new Order()
    order.payments = payments
    order.ordersDetails = ordersDetails
    order.amount = payments
      .map((payment) => payment.amount)
      .reduce((a, b) => a + b, 0)
    return new Order()
  }
}

export default OrderDTOBuilder
