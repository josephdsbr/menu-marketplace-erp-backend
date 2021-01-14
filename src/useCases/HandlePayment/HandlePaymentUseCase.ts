import GatewayEnum from '../../entity/domain/GatewayEnum'
import PaymentDTO from '../../entity/dtos/PaymentDTO'
import { Payment } from '../../entity/Payment'
import GatewayFactory from '../../integration/external/gateway/GatewayFactory'
import IPaymentRepository from '../../repositories/IPaymentRepository'
class HandlePaymentUseCase {
  constructor(
    private paymentRepository: IPaymentRepository<any>,
    private gatewayFactory: GatewayFactory
  ) {}

  execute(data: PaymentDTO): Payment {
    try {
      let persistedPayment: Payment
      const gateway = this.gatewayFactory.createGateway(GatewayEnum.BRASPAG)
      const payment = gateway.doPayment(data)
      this.paymentRepository
        .save(payment)
        .then((result) => (persistedPayment = result))
      return persistedPayment
    } catch (err) {
      console.error(err)
      return null
    }
  }
}

export default HandlePaymentUseCase
