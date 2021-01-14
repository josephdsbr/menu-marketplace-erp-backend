import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Order } from './Order'
import Product from './Product'

@Entity()
export class Payment extends BaseEntity<Payment> {
  @Column({ nullable: false })
  cardToken: string
  @Column({ nullable: false })
  amount: number
  @OneToMany(() => Order, (order) => order.payments)
  order: Order

  constructor() {
    super()
  }
}

export default Product
