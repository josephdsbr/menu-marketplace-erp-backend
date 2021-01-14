import OrderDetails from '../entity/OrderDetails'

export interface IOrderDetailsRepository<T> {
  save(data: T[]): Promise<OrderDetails[]>
}

export default IOrderDetailsRepository
