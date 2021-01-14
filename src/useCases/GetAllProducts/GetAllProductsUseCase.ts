import ProductDTOBuilder from '../../entity/builders/ProductDTOBuilder'
import ProductDTO from '../../entity/dtos/ProductDTO'
import { IProductRepository } from '../../repositories/IProductRepository'

class GetAllProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<ProductDTO[]> {
    const products = await this.productRepository.findAll()
    return products.map((product) => ProductDTOBuilder.fromEntity(product))
  }
}

export default GetAllProductsUseCase
