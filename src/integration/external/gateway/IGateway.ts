import { Payment } from '../../../entity/Payment'

// eslint-disable-next-line @typescript-eslint/ban-types
interface IGateway<T extends object> {
  doPayment(data: T): Payment
}

export default IGateway
