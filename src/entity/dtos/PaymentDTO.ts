import { IsNotEmpty, MinLength, MaxLength, Matches, Min } from 'class-validator'
import { EXPIRATION_DATE_FORMAT_YYYY_MM } from '../../utils/Constants'

class PaymentDTO {
  @IsNotEmpty()
  @MinLength(13)
  @MaxLength(18)
  private cardNumber: string
  @IsNotEmpty()
  @Matches(EXPIRATION_DATE_FORMAT_YYYY_MM)
  private cardExpiredAt: string
  @IsNotEmpty()
  private cardHolder: string
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(5)
  private cardSecurity: string
  @IsNotEmpty()
  @Min(1)
  private amount: number

  public getAmount(): number {
    return this.amount
  }

  public setAmount(amount: number): this {
    this.amount = amount
    return this
  }

  public getCardSecurity(): string {
    return this.cardSecurity
  }

  public setCardSecurity(cardSecurity: string): this {
    this.cardSecurity = cardSecurity
    return this
  }

  public getCardNumber(): string {
    return this.cardNumber
  }

  public setCardNumber(cardNumber: string): this {
    this.cardNumber = cardNumber
    return this
  }

  public getCardExpiredAt(): string {
    return this.cardExpiredAt
  }

  public setCardExpiredAt(cardExpiredAt: string): this {
    this.cardExpiredAt = cardExpiredAt
    return this
  }

  public getCardHolder(): string {
    return this.cardHolder
  }

  public setCardHolder(cardHolder: string): this {
    this.cardHolder = cardHolder
    return this
  }
}

export default PaymentDTO
