import { Column, CreateDateColumn, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Payment } from './Payment'
import Product from './Product'

@Entity()
export class Order extends BaseEntity<Order> {
  @Column({ nullable: false })
  amount: number
  @CreateDateColumn({ type: 'timestamp' })
  orderDate: Date
  @OneToMany(() => Payment, (payment) => payment.order)
  payments: Payment[]

  constructor() {
    super()
  }
}

export default Product
