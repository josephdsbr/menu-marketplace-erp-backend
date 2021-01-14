import ProductDTOBuilder from '../../entity/builders/ProductDTOBuilder'
import Messages from '../../messages/Messages'
import { IProductRepository } from '../../repositories/IProductRepository'
import CreateProductDTO from '../../entity/dtos/ProductDTO'

class CreateUserUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: CreateProductDTO): Promise<void> {
    const productAlreadyExists = await this.productRepository.findByName(
      data.getName
    )

    if (productAlreadyExists) {
      throw new Error(Messages.PRODUCT_ALREADY_EXISTS)
    }

    const product = ProductDTOBuilder.toEntity(data)

    await this.productRepository.save(product)
  }
}

export default CreateUserUseCase
