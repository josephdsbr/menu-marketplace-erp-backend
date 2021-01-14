import { Column, CreateDateColumn, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { OrderDetails } from './OrderDetails'
import { Payment } from './Payment'

@Entity()
export class Order extends BaseEntity<Order> {
  @Column({ nullable: false })
  amount: number
  @CreateDateColumn({ type: 'timestamp' })
  orderDate: Date
  @OneToMany(() => Payment, (payment) => payment.order)
  payments: Payment[]
  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.order)
  ordersDetails: OrderDetails[]

  constructor() {
    super()
  }
}

export default Order
