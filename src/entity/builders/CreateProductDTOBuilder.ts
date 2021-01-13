import CreateProductDTO from '../../useCases/CreateProduct/CreateProductDTO'
import Product from '../Product'

class CreateProductDTOBuilder {
  static fromEntity = (entity: Product) => {
    return new CreateProductDTO()
      .setImgUrl(entity.imgUrl)
      .setName(entity.name)
      .setPrice(entity.price)
      .build()
  }

  static toEntity = (dto: CreateProductDTO) => {
    return new Product()
      .setImgUrl(dto.getImgUrl)
      .setName(dto.getName)
      .setPrice(dto.getPrice)
  }
}

export default CreateProductDTOBuilder
