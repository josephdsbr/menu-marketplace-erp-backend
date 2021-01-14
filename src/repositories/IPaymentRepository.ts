import { Payment } from '../entity/Payment'

export interface IPaymentRepository<T> {
  save(data: T): Promise<Payment>
}

export default IPaymentRepository
