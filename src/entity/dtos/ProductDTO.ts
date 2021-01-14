import { IsNotEmpty, IsPositive } from 'class-validator'

class ProductDTO {
  @IsNotEmpty()
  private name: string
  @IsNotEmpty()
  private imgUrl: string
  @IsPositive()
  private price: number

  public get getName(): string {
    return this.name
  }

  public get getImgUrl(): string {
    return this.imgUrl
  }

  public get getPrice(): number {
    return this.price
  }

  public setName = (name: string): this => {
    this.name = name
    return this
  }

  public setImgUrl = (imgUrl: string): this => {
    this.imgUrl = imgUrl
    return this
  }

  public setPrice = (price: number): this => {
    this.price = price
    return this
  }

  public build = (): this => this
}

export default ProductDTO
