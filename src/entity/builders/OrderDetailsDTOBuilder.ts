import OrderDetailsDTO from '../dtos/OrderDetailsDTO'
import { Order } from '../Order'
import { OrderDetails } from '../OrderDetails'

class OrderDetailsDTOBuilder {
  static fromEntities = (entities: OrderDetails[]): OrderDetailsDTO[] => {
    return entities.map((entity) =>
      new OrderDetailsDTO()
        .setAmount(entity.amount)
        .setProductId(entity.product.id)
    )
  }

  static fromEntity = (entity: OrderDetails): OrderDetailsDTO => {
    return new OrderDetailsDTO()
      .setAmount(entity.amount)
      .setProductId(entity.product.id)
  }
}

export default OrderDetailsDTOBuilder
