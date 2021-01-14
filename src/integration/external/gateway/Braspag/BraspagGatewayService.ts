import { Order } from '../../../../entity/Order'
import { Payment } from '../../../../entity/Payment'
import IGateway from '../IGateway'

class BraspagGatewayService implements IGateway<Payment> {
  doPayment(data: Payment): Payment {
    return data
  }
}

export default BraspagGatewayService
