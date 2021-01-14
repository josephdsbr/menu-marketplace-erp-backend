import { Column, Entity } from 'typeorm'
import { BaseEntity } from './BaseEntity'

@Entity()
export class Product extends BaseEntity<Product> {
  @Column({ nullable: false })
  name: string
  @Column({ nullable: false })
  imgUrl: string
  @Column({ nullable: false })
  price: number

  constructor() {
    super()
  }

  setName = (name: string): this => {
    this.name = name
    return this
  }

  setImgUrl = (imgUrl: string): this => {
    this.imgUrl = imgUrl
    return this
  }

  setPrice = (price: number): this => {
    this.price = price
    return this
  }
}

export default Product
