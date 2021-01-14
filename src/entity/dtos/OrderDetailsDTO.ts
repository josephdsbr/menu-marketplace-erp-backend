import { IsNotEmpty, Min } from 'class-validator'

class OrderDetailsDTO {
  @IsNotEmpty()
  @Min(1)
  private amount: number
  @IsNotEmpty()
  private productId: number

  public getAmount(): number {
    return this.amount
  }

  public setAmount(amount: number): this {
    this.amount = amount
    return this
  }

  public getProductId(): number {
    return this.productId
  }

  public setProductId(productId: number): this {
    this.productId = productId
    return this
  }
}

export default OrderDetailsDTO
