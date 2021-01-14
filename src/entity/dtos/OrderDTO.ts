import OrderDetailsDTO from './OrderDetailsDTO'
import PaymentDTO from './PaymentDTO'

class OrderDTO {
  private orderDetails: OrderDetailsDTO[]
  private payments: PaymentDTO[]

  public getOrderDetails(): OrderDetailsDTO[] {
    return this.orderDetails
  }

  public setOrderDetails(orderDetails: OrderDetailsDTO[]): this {
    this.orderDetails = orderDetails
    return this
  }

  public getPayments(): PaymentDTO[] {
    return this.payments
  }

  public setPayments(payments: PaymentDTO[]): this {
    this.payments = payments
    return this
  }
}

export default OrderDTO
