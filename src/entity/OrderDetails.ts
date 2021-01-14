import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne } from 'typeorm'
import { BaseEntity } from './BaseEntity'
import { Order } from './Order'
import Product from './Product'

@Entity()
export class OrderDetails extends BaseEntity<OrderDetails> {
  @Column({ nullable: false })
  amount: number
  @OneToOne(() => Product)
  @JoinColumn()
  product: Product
  @OneToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order

  constructor() {
    super()
  }
}

export default Product
