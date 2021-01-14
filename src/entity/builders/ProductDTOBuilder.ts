import ProductDTO from '../dtos/ProductDTO'
import Product from '../Product'

class ProductDTOBuilder {
  static fromEntity = (entity: Product) => {
    return new ProductDTO()
      .setImgUrl(entity.imgUrl)
      .setName(entity.name)
      .setPrice(entity.price)
      .build()
  }

  static toEntity = (dto: ProductDTO) => {
    return new Product()
      .setImgUrl(dto.getImgUrl)
      .setName(dto.getName)
      .setPrice(dto.getPrice)
  }
}

export default ProductDTOBuilder
