import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Order } from './Order'

@Entity()
export class Payment extends BaseEntity<Payment> {
  @Column({ nullable: false })
  cardToken: string
  @Column({ nullable: false })
  amount: number
  @OneToMany(() => Order, (order) => order.payments)
  order: Order

  constructor(amount: number, order: Order) {
    super()
    this.amount = amount
    this.order = order
  }
}

export default Payment
