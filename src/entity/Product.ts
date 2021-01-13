import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './BaseEntity'

@Entity()
export class Product extends BaseEntity<Product> {
  @Column({ nullable: false })
  name: string
  @Column({ nullable: false })
  imgUrl: string
  @Column({ nullable: false })
  price: number
}

export default Product
