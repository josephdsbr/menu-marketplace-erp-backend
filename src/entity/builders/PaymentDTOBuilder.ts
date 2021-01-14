import PaymentDTO from '../dtos/PaymentDTO'
import Order from '../Order'
import { Payment } from '../Payment'

class PaymentDTOBuilder {
  static fromEntity = (entity: Payment) => {
    return new PaymentDTO().setAmount(entity.amount)
  }

  static fromEntities = (entities: Payment[]): PaymentDTO[] => {
    return entities.map((entity) => new PaymentDTO().setAmount(entity.amount))
  }

  static toEntity = (dto: PaymentDTO, order: Order): Payment => {
    return new Payment(dto.getAmount(), order)
  }
}

export default PaymentDTOBuilder
