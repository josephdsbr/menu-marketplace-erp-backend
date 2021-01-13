import CreateProductDTOBuilder from '../../entity/builders/CreateProductDTOBuilder'
import Messages from '../../messages/Messages'
import { IProductRepository } from '../../repositories/IProductRepository'
import CreateProductDTO from './CreateProductDTO'

class CreateUserUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: CreateProductDTO) {
    const productAlreadyExists = await this.productRepository.findByName(
      data.getName
    )

    if (productAlreadyExists) {
      throw new Error(Messages.PRODUCT_ALREADY_EXISTS)
    }

    const product = CreateProductDTOBuilder.toEntity(data)

    await this.productRepository.save(product)
  }
}

export default CreateUserUseCase
