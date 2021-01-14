import ProductDTOBuilder from '../../entity/builders/ProductDTOBuilder'
import { IProductRepository } from '../../repositories/IProductRepository'

class GetAllProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute() {
    const products = await this.productRepository.findAll()
    return products.map((product) => ProductDTOBuilder.fromEntity(product))
  }
}

export default GetAllProductsUseCase
